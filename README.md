# DOORDRIPP - Coming Soon Page

Luxury fashion delivery service landing page built with React, TypeScript, and Framer Motion.

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI
1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Login to Vercel:
   ```bash
   vercel login
   ```

4. Deploy:
   ```bash
   vercel
   ```

### Option 2: Deploy via GitHub
1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- ✨ Modern React 18 with TypeScript
- 🎨 Tailwind CSS with custom gold theme
- 🎭 Framer Motion animations
- 📱 Fully responsive design
- ⚡ Lightning-fast Vite build tool

## Project Structure

```
doordripp-coming/
├── src/
│   ├── pages/
│   │   └── ComingSoon.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── image.png (add your logo)
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Important Notes

- Add your logo file at `public/image.png`
- The app uses Unsplash images for fashion backgrounds
- Email subscription currently stores locally (add backend integration as needed)
