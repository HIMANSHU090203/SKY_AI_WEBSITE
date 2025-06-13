# SKY AI - Vercel Deployment Script (PowerShell)
Write-Host "🚀 SKY AI - Vercel Deployment Script" -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Green

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: Run this script from the frontend directory" -ForegroundColor Red
    exit 1
}

# Check if Vercel CLI is installed
if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "📦 Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

# Build the project first
Write-Host "🔨 Building the project..." -ForegroundColor Blue
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed. Please fix errors before deploying." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful!" -ForegroundColor Green

# Deploy to Vercel
Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Blue
vercel --prod

Write-Host ""
Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Add environment variables in Vercel dashboard"
Write-Host "2. Run 'npm run seed:admin' to create admin user"
Write-Host "3. Test your deployment"
Write-Host ""
Write-Host "Environment variables needed:" -ForegroundColor Cyan
Write-Host "- MONGODB_URI"
Write-Host "- JWT_SECRET" 