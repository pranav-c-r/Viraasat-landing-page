# Viraasat (Next.js + Tailwind v3)

This is the `viraasat` Next.js project configured to use Tailwind CSS v3.


## Quick start (Windows PowerShell)

1. Install dependencies

   ```powershell
   cd "c:\Users\LENOVO\Music\visarat\Viraasat-landing-page\viraasat"
   npm install
   ```

2. Run the development server

   ```powershell
   cd "c:\Users\LENOVO\Music\visarat\Viraasat-landing-page\viraasat"
   npm run dev
   ```

Open `http://localhost:3001` (Next.js may pick an alternative port if 3000 is in use).

## How to verify Tailwind v3 is working

- The homepage (`src/app/page.js`) includes a "Tailwind v3 Test" card with styled buttons and a gradient background. If those styles appear, Tailwind is working.
- You can also inspect the compiled CSS in the browser DevTools to see Tailwind utility classes.

## Files of interest

- `tailwind.config.js` - Tailwind configuration (content paths, theme)
- `postcss.config.mjs` - PostCSS config using `tailwindcss` and `autoprefixer`
- `src/app/globals.css` - Includes `@tailwind base`, `@tailwind components`, `@tailwind utilities`
- `src/app/page.js` - Demo/test UI using Tailwind classes

## Troubleshooting

- EPERM errors while building: try deleting the `.next` directory and re-running `npm run dev`.
  ```powershell
  Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
  ```
- If Next.js infers the wrong workspace root (multiple lockfiles warning), set `outputFileTracingRoot` in `next.config.mjs` or remove the extra lockfile.
- If Tailwind classes aren't applied, ensure `globals.css` is imported in your root layout and that `tailwind.config.js` `content` paths include `src/app`.

## Next step

- Add components under `src/components` and reuse Tailwind classes
- Customize `tailwind.config.js` theme if you need custom colors/spacing

If you want, I can also commit these changes to `git` and create a short CONTRIBUTING guide.
