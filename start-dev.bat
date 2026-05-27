@echo off
start cmd /k "cd server && npm run dev"
start cmd /k "cd admin && npm run dev"
start cmd /k "npm run dev"
echo "All servers are starting..."
pause
