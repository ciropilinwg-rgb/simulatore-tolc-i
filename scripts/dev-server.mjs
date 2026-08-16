import { spawn } from 'node:child_process';
import process from 'node:process';
import path from 'node:path';
import { createSimulatoreServer } from '../server/appServer.mjs';

function parseArgs(argv) {
  const options = {
    host: process.env.HOST || '127.0.0.1',
    port: Number.parseInt(process.env.PORT || '5173', 10)
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--host' && argv[index + 1]) {
      options.host = argv[index + 1];
      index += 1;
      continue;
    }

    if (token === '--port' && argv[index + 1]) {
      const parsedPort = Number.parseInt(argv[index + 1], 10);
      if (!Number.isNaN(parsedPort)) {
        options.port = parsedPort;
      }
      index += 1;
    }
  }

  return options;
}

function logLine(chunk) {
  const text = chunk.toString();
  if (!text.trim()) {
    return;
  }
  process.stdout.write(text);
}

const { host, port } = parseArgs(process.argv.slice(2));
const projectRoot = process.cwd();
const distDir = path.join(projectRoot, 'dist');
const dataDir = process.env.DATA_DIR || path.join(projectRoot, 'server-data');
const dbPath = process.env.DB_PATH || path.join(dataDir, 'simulatore.sqlite');
const outboxDir = process.env.OUTBOX_DIR || path.join(dataDir, 'outbox');
const viteBin = path.join(projectRoot, 'node_modules', 'vite', 'bin', 'vite.js');
const appBaseUrl = process.env.APP_BASE_URL || `http://${host}:${port}`;

const app = createSimulatoreServer({
  distDir,
  dbPath,
  outboxDir,
  appBaseUrl,
  enableReloadEvents: true
});

let reloadTimer = null;
function scheduleReload() {
  clearTimeout(reloadTimer);
  reloadTimer = setTimeout(() => {
    app.broadcastReload();
  }, 150);
}

const buildProcess = spawn(
  process.execPath,
  [viteBin, 'build', '--configLoader', 'runner', '--watch'],
  {
    cwd: projectRoot,
    env: process.env,
    stdio: ['inherit', 'pipe', 'pipe']
  }
);

buildProcess.stdout.on('data', (chunk) => {
  const text = chunk.toString();
  if (text.includes('built in')) {
    scheduleReload();
  }
  logLine(chunk);
});

buildProcess.stderr.on('data', (chunk) => {
  logLine(chunk);
});

buildProcess.on('exit', async (code) => {
  clearTimeout(reloadTimer);
  await app.close();
  process.exit(code ?? 0);
});

app.server.listen(port, host, () => {
  console.log(`[dev-server] Simulatore TOLC-I disponibile su ${appBaseUrl}`);
  console.log('[dev-server] Build in watch mode attiva. La pagina si ricarica dopo ogni ricompilazione.');
});

async function shutdown() {
  clearTimeout(reloadTimer);
  if (!buildProcess.killed) {
    buildProcess.kill();
  }
  await app.close();
  process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
