import process from 'node:process';
import path from 'node:path';
import { createSimulatoreServer } from '../server/appServer.mjs';

function parseArgs(argv) {
  const options = {
    host: process.env.HOST || (process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1'),
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

const { host, port } = parseArgs(process.argv.slice(2));
const projectRoot = process.cwd();
const distDir = path.join(projectRoot, 'dist');
const dataDir = process.env.DATA_DIR || path.join(projectRoot, 'server-data');
const dbPath = process.env.DB_PATH || path.join(dataDir, 'simulatore.sqlite');
const outboxDir = process.env.OUTBOX_DIR || path.join(dataDir, 'outbox');
const appBaseUrl = process.env.APP_BASE_URL || `http://${host}:${port}`;

const app = createSimulatoreServer({
  distDir,
  dbPath,
  outboxDir,
  appBaseUrl,
  enableReloadEvents: false
});

app.server.listen(port, host, () => {
  console.log(`[server] Simulatore TOLC-I disponibile su ${appBaseUrl}`);
});

async function shutdown() {
  await app.close();
  process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
