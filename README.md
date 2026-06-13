# Damba Alex Portfolio

A Vercel-ready React + Vite portfolio website.

## Files

```text
alex-portfolio-vercel/
├── package.json
├── index.html
├── vite.config.js
├── vercel.json
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```

## Run locally in VS Code

Open the folder in VS Code, then run:

```bash
npm install
npm run dev
```

Open the local link shown in the terminal, usually:

```text
http://localhost:5173
```

## Deploy to Vercel

1. Create a GitHub repository, for example `alex-portfolio`.
2. Upload/push this project folder to the repository.
3. Go to Vercel and import the GitHub repository.
4. Use these settings:
   - Framework Preset: Vite
   - Build Command: npm run build
   - Output Directory: dist
5. Click Deploy.

## Edit personal links

In `src/App.jsx`, replace:
- GitHub link: `https://github.com/alexkwagala09`
- LinkedIn link: `https://www.linkedin.com/`
- Email: `alexkwagala09@gmail.com`
