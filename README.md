# Skill Sprint Hackathon - October 4-5, 2025
Continuous deployment active! 🚀

## 🚀 Automatic Deployment Setup

This project is configured for automatic deployment. Here's how it works:

### Deployment Options

1. **Netlify Deployment** (Primary)
   - Automatically deploys when you push to the `main` branch
   - Requires Netlify secrets to be configured in GitHub

2. **GitHub Pages** (Alternative)
   - Deploys to GitHub Pages
   - No additional configuration needed

### How to Deploy Changes

#### Option 1: Using the Deploy Script (Recommended)
```bash
# Deploy with automatic commit message
./deploy.sh

# Deploy with custom commit message
./deploy.sh "Your custom commit message"
```

#### Option 2: Manual Git Commands
```bash
# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub (triggers automatic deployment)
git push origin main
```

### Setting Up Netlify Deployment

To enable Netlify deployment, you need to add these secrets to your GitHub repository:

1. Go to your GitHub repository settings
2. Navigate to "Secrets and variables" → "Actions"
3. Add these repository secrets:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
   - `NETLIFY_SITE_ID`: Your Netlify site ID

### Setting Up GitHub Pages

1. Go to your GitHub repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy to GitHub Pages

### Monitoring Deployments

- Check the "Actions" tab in your GitHub repository to monitor deployment progress
- Netlify deployments will show up in your Netlify dashboard
- GitHub Pages deployments will be available at `https://yourusername.github.io/skill-8`

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```