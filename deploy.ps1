# Script de déploiement GitHub Pages
# À exécuter après avoir installé Git (https://git-scm.com)

$REPO_NAME = "portfolio-crmef"
$USERNAME = "ouijdane"

Write-Host "=== Déploiement GitHub Pages ===" -ForegroundColor Cyan
Write-Host ""

# 1. Installer Git si nécessaire
$gitCheck = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitCheck) {
    Write-Host "❌ Git n'est pas installé." -ForegroundColor Red
    Write-Host "Téléchargez-le depuis: https://git-scm.com/downloads/win"
    Write-Host "Puis réexécutez ce script."
    exit 1
}

Write-Host "✅ Git est installé" -ForegroundColor Green

# 2. Initialiser le dépôt
if (-not (Test-Path ".git")) {
    git init
    Write-Host "✅ Dépôt Git initialisé" -ForegroundColor Green
}

# 3. Ajouter tous les fichiers
git add -A
Write-Host "✅ Fichiers ajoutés" -ForegroundColor Green

# 4. Premier commit
git commit -m "Refonte complète portfolio CRMEF — Design system premium, storytelling, roadmap interactive"
Write-Host "✅ Commit créé" -ForegroundColor Green

# 5. Créer le dépôt GitHub
$ghCheck = Get-Command gh -ErrorAction SilentlyContinue
if ($ghCheck) {
    gh repo create $REPO_NAME --public --source=. --remote=origin --push
    Write-Host "✅ Dépôt GitHub créé et push effectué" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "=== Actions manuelles requises ===" -ForegroundColor Yellow
    Write-Host "1. Créez un dépôt sur GitHub: https://github.com/new"
    Write-Host "   Nom: $REPO_NAME"
    Write-Host "   Visibilité: Public"
    Write-Host ""
    Write-Host "2. Liez le dépôt local et pushez:"
    Write-Host "   git remote add origin https://github.com/$USERNAME/$REPO_NAME.git"
    Write-Host "   git branch -M main"
    Write-Host "   git push -u origin main"
    Write-Host ""
    Write-Host "3. Activez GitHub Pages:"
    Write-Host "   Settings → Pages → Branch: main → / (root) → Save"
    Write-Host ""
    Write-Host "4. Votre site sera en ligne sur:"
    Write-Host "   https://$USERNAME.github.io/$REPO_NAME" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "=== Prêt ! ===" -ForegroundColor Cyan
