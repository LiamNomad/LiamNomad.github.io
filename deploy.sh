#!/bin/bash

echo "🚀 Building your website..."
npm run build

echo "✅ Adding .nojekyll to skip Jekyll processing..."
touch dist/.nojekyll

echo "🧹 Cleaning up old /docs folder..."
rm -rf docs

echo "🗂️  Copying new build output to /docs..."
cp -r dist docs

echo "📄 Staging changes..."
git add docs

echo "✅ Committing..."
git commit -m "Deploy latest build with .nojekyll"

echo "⬆️ Pushing to GitHub..."
git push origin main

echo "🎉 Deployment complete! Your website should be live at https://liamnomad.github.io"
