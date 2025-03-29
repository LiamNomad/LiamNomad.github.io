#!/bin/bash

echo "🚀 Building your website..."
npm run build

echo "🧹 Cleaning up old /docs folder..."
rm -rf docs

echo "🗂️  Copying new build output to /docs..."
cp -r dist docs

echo "📄 Staging changes..."
git add docs

echo "✅ Committing..."
git commit -m "Deploy latest version"

echo "⬆️ Pushing to GitHub..."
git push origin main

echo "🎉 Deployment complete! Visit https://liamnomad.github.io"
