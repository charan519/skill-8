#!/bin/bash

# Deploy script for skill-8 project
# This script will commit changes and push to GitHub, triggering automatic deployment

echo "🚀 Starting deployment process..."

# Check if there are any changes to commit
if [ -z "$(git status --porcelain)" ]; then
    echo "No changes to commit."
    exit 0
fi

# Add all changes
echo "📝 Adding changes..."
git add .

# Get commit message from user or use default
if [ -z "$1" ]; then
    COMMIT_MSG="Update website - $(date '+%Y-%m-%d %H:%M:%S')"
else
    COMMIT_MSG="$1"
fi

# Commit changes
echo "💾 Committing changes with message: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git push origin main

echo "✅ Deployment initiated! Check GitHub Actions for progress."
echo "🔗 Your site will be updated automatically once the build completes."
