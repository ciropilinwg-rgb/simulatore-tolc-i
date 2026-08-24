@echo off
cd /d "%~dp0"
echo.
echo Pubblicazione del simulatore su Firebase Hosting...
echo.
npx.cmd firebase-tools deploy --only hosting
echo.
echo Se il deploy e' completato, apri:
echo https://simulatore-tolc-i.web.app
echo.
pause
