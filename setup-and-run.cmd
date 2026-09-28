@echo off
cd /d %~dp0

echo Installing required packages...
call npm install react-router-dom lucide-react tailwindcss @tailwindcss/vite
if errorlevel 1 goto :error

if exist src\App.css del /q src\App.css
if exist src\assets rmdir /s /q src\assets
if exist public\vite.svg del /q public\vite.svg

echo.
echo Starting development server...
call npm run dev
goto :eof

:error
echo.
echo Setup failed. Please copy the terminal error and send it to ChatGPT.
pause
