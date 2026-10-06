#!/usr/bin/env bash
set -euo pipefail

GH_USER="d-donne"

# Old repo names. These become the folder names.
REPOS=(
  "four-card-feature-section"
  "launch-countdown-timer"
  "article-preview-component"
  "base-apparel-coming-soon-page"
  "nft-preview-card-component"
  "news-homepage"
  "tip-calculator-app"
  "single-price-grid-component"
  "intro-component-with-form"
  "testimonials-grid-section"
  "preview-card-component"
  "profile-card-component"
  "qr-code-component"
  "easybank-landingpage"
)

for repo in "${REPOS[@]}"; do
  url="https://github.com/${GH_USER}/${repo}.git"

  if [ -d "$repo" ]; then
    echo "Skipping $repo (folder already exists)"
    continue
  fi

  # Detect each repo's default branch (main vs master)
  branch=$(git ls-remote --symref "$url" HEAD | awk '/^ref:/ {sub("refs/heads/","",$2); print $2}')

  if [ -z "$branch" ]; then
    echo "Could not read $url, skipping"
    continue
  fi

  echo "Importing $repo ($branch)..."
  git subtree add --prefix="$repo" "$url" "$branch" \
    -m "Import $repo into monorepo"
done

# Keep build output and dependencies out of the repo
if [ ! -f .gitignore ]; then
  printf "node_modules/\ndist/\nbuild/\n_site/\n.DS_Store\n" > .gitignore
  git add .gitignore
  git commit -m "Add .gitignore"
fi

echo "Done. Run 'git push' when ready."