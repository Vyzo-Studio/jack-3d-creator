# Publish this finished project to Vyzo-Studio on GitHub

The project is independent of existing VYZO client websites. No other repository should be changed to publish it.

## Step 1 — Create the destination

Open https://github.com/new, select account **Vyzo-Studio**, and create a **public** repository named `jack-3d-creator` with **no README, .gitignore or license** (the project already contains its own files).

## Step 2 — Push this folder from a terminal

Install Git and Node.js if needed, open a terminal in this unzipped folder, then run:

```bash
git init -b main
git add .
git commit -m "Build Jack 3D creator portfolio"
git remote add origin https://github.com/Vyzo-Studio/jack-3d-creator.git
git push -u origin main
```

You can also add/upload the files using GitHub Desktop, keeping the original folder structure.

## Step 3 — Enable automatic GitHub Pages deployment

Open https://github.com/Vyzo-Studio/jack-3d-creator/settings/pages, then set **Build and deployment > Source: GitHub Actions**. The workflow `deploy.yml` already builds and deploys automatically after a push to `main`.

The eventual site URL should be:

https://vyzo-studio.github.io/jack-3d-creator/

*This is the expected address, not proof that a repository or live website has already been created.*

## Step 4 — Before sharing with customers

Set the email in `src/data/site.ts` and replace null project URLs in `src/data/assets.ts` with actual verified links. Media currently comes from the third-party links named in the original brief; for long-term reliability, host owned/licensed copies locally.
