
# Jana's React Portfolio (JavaScript + Vite)

A minimal, responsive portfolio built with **React (JavaScript)** and **Vite**, auto-deployed to **GitHub Pages** via **GitHub Actions**.

## 🚀 Quick start

1. **Download / Clone** this project.
2. Install Node.js 18+.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open `http://localhost:5173`.

Edit content in:
- `src/components/Hero.jsx` (intro)
- `src/components/Contact.jsx` (links)
- `src/data/projects.js` (projects)

## 🌐 Deploy to GitHub Pages

This repo includes an **official Pages workflow**. Steps:

1. Push the project to GitHub.
2. Go to **Settings → Pages → Build and deployment** and set **Source = GitHub Actions**.
3. Ensure your default branch is `main` (or adjust workflow).
4. Push to `main` and the action will build and deploy.

### Repo types & base path
- **User/Org site**: repo named `<username>.github.io` → site is `https://<username>.github.io`.
  The workflow sets `base = '/'` automatically.
- **Project site**: any other repo name → site is `https://<username>.github.io/<repo>/`.
  The workflow sets `base = '/<repo>/'` automatically.

## 🔧 Local build
```bash
npm run build
npm run preview
```

## 🧪 Tech stack
- React 18
- Vite 5
- JavaScript (no TypeScript)
- GitHub Actions + Pages

## 📄 License
MIT
