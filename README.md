# OEMS — complete project folder

This folder gathers the supplied OEMS application source files and includes the PDF-import persistence fix.

## Run locally

1. Install Node.js 20.19+ (or a compatible current LTS release).
2. Open a terminal in this folder.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite.

## Build for deployment

```bash
npm run build
npm run preview
```

## PDF question import persistence

The exam creation form now stores its draft, including imported questions, in browser localStorage while you work. Refreshing the page restores the draft; after the exam is saved, the temporary draft is cleared.

## Important data note

This bundled setup uses the supplied browser-based static API. Its data is stored in localStorage on that browser/device, so it is not automatically shared with other devices or users. PDF import may require a Gemini API key in the app's supported configuration. Never publish an API key in a public repository.

## Included files

- `App.tsx` — main React app, including the persistence fix
- `main.tsx`, `index.html`, `index.css` — frontend entry files
- `static-api.ts`, `seed.ts` — browser API and initial data
- `types.ts` — TypeScript app types
- `package.json`, `package-lock.json`, `bun.lock` — dependencies
- `vite.config.ts`, `tsconfig.json` — build configuration
- `.env.example`, `.gitignore`, `deploy.yml` — supplied project configuration
- `PDF-IMPORT-FIX.md` — details of the fix

Note: the original upload did not include a separate Express `server.ts` or a complete GitHub Actions workflow directory, so this folder is configured to run in browser/static mode rather than pretending those missing files are included.
