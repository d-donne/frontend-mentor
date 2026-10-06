#!/usr/bin/env bash

set -euo pipefail

GH_USER="d-donne"
MONOREPO="frontend-mentor"

REPOS=(
    "four-card-feature-section"
  "launch-countdown-timer"
  "article-preview-component"
  "base-apparel-coming-soon-page"
  "nft-preview-card-component"
  "single-price-grid-component"
  "intro-component-with-form"
  "testimonials-grid-section"
  "preview-card-component"
  "profile-card-component"
  "qr-code-component"
  "easybank-landingpage"
)

MODE="dry"
case "${1:-}" in
  --archive) MODE="archive" ;;
  --delete)  MODE="delete" ;;
  "")        ;;
  *) echo "Unknown option: $1"; exit 1 ;;
esac

command -v gh >/dev/null || { echo "Install the GitHub CLI first."; exit 1; }
gh auth status >/dev/null 2>&1 || { echo "Run 'gh auth login' first."; exit 1; }

# 1. Safety check: only touch repos whose folder exists in the monorepo
#    on GitHub
safe=()
for repo in "${REPOS[@]}"; do
  if ! gh api "repos/${GH_USER}/${repo}" >/dev/null 2>&1; then
    echo "[skip]   $repo: old repo not found (already removed?)"
  elif gh api "repos/${GH_USER}/${MONOREPO}/contents/${repo}" >/dev/null 2>&1; then
    echo "[ok]     $repo: found in ${MONOREPO}"
    safe+=("$repo")
  else
    echo "[SKIP]   $repo: NOT found in ${MONOREPO}, leaving it alone"
  fi
done

if [ ${#safe[@]} -eq 0 ]; then
  echo "Nothing to do."
  exit 0
fi

echo
echo "Mode: $MODE | Repos affected: ${#safe[@]}"

if [ "$MODE" = "dry" ]; then
  echo "Dry run only. Re-run with --archive or --delete to act."
  exit 0
fi

# 2. Confirmation
if [ "$MODE" = "delete" ]; then
  echo "This PERMANENTLY deletes the repos listed above. It cannot be undone."
  read -r -p "Type DELETE to continue: " answer
  [ "$answer" = "DELETE" ] || { echo "Aborted."; exit 1; }
else
  read -r -p "Archive these repos? [y/N] " answer
  [[ "$answer" =~ ^[Yy]$ ]] || { echo "Aborted."; exit 1; }
fi

# 3. Act
for repo in "${safe[@]}"; do
  if [ "$MODE" = "delete" ]; then
    gh repo delete "${GH_USER}/${repo}" --yes && echo "Deleted  $repo"
  else
    gh repo archive "${GH_USER}/${repo}" --yes && echo "Archived $repo"
  fi
done

echo "Done."