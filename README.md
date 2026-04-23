# Braxe Browser

Privacy-focused desktop browser foundation built with Electron, React, TypeScript, Node.js, and Tailwind CSS.

## STEP 1 Complete

This repository now includes:

- Electron backend (`main/`) with secure defaults
- React + TypeScript renderer (`renderer/`)
- Tailwind CSS integrated in the renderer
- Secure preload bridge with validated IPC
- Initial scalable folder layout (`components/`, `services/`, `utils/`)

## Project Structure

```text
braxebrowser/
├─ main/
│  ├─ ipc.ts
│  ├─ main.ts
│  └─ preload.ts
├─ renderer/
│  ├─ src/
│  │  ├─ App.tsx
│  │  ├─ global.d.ts
│  │  ├─ index.css
│  │  └─ main.tsx
│  ├─ package.json
│  └─ vite.config.ts
├─ components/
├─ services/
├─ utils/
├─ package.json
└─ tsconfig.main.json
```

## Run

```bash
npm install
cd renderer && npm install && cd ..
npm run dev
```

## Build

```bash
npm run build
```
