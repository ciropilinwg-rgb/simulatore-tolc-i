@echo off
setlocal
cd /d "%~dp0"

if not exist "node_modules" (
  echo Dipendenze non trovate. Avvio installazione...
  call npm install
  if errorlevel 1 (
    echo.
    echo Impossibile installare le dipendenze della web app.
    pause
    exit /b 1
  )
)

set "PORT=5173"
powershell -NoProfile -Command "$client = [System.Net.Sockets.TcpClient]::new(); try { $client.Connect('localhost', 5173); exit 1 } catch { exit 0 } finally { $client.Dispose() }"
if errorlevel 1 (
  set "PORT=5174"
)

echo Avvio l'applicazione in sviluppo sulla porta %PORT%...
start "TOLC-I, il simulatore" cmd /k "cd /d ""%~dp0"" && npm run dev -- --host localhost --port %PORT%"

timeout /t 3 /nobreak >nul
start "" "http://localhost:%PORT%/"
