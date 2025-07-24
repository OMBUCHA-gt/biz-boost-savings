#!/usr/bin/env bash

set -e

echo "🛠️ Building the project..."
pnpm build

cd dist

echo "🚀 Deploying to gh-pages branch..."
git init
git add .
git commit -m "Deploy"
git remote add origin https://github.com/OMBUCHA-gt/biz-boost-savings.git
git branch -M gh-pages
git push -f origin gh-pages

cd ..

echo "✅ Deployment complete!"
echo "🌐 Visit: https://ombucha-gt.github.io/biz-boost-savings/"
