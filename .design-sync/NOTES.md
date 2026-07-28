# design-sync notes — sfmarket-rebuild

- This DS is CSS-first: the source of truth is `assets/css/styles.css` (tokens + component classes), rebuilt from the Wayback Machine capture of sfmarket.hk. `ds-react/` is a thin typed React wrapper package created 2026-07-28 so the DS can sync to Claude Design. Edit `assets/css/styles.css`, never `ds-react/dist/styles.css` (the build copies it).
- `buildCmd` is `cd ds-react && npm run build` (tsc + stylesheet copy). `ds-react/dist/` and `ds-react/node_modules/` are gitignored — always run the build before the converter on a fresh clone.
- Converter deps quirk: `.ds-sync` needs `typescript@5` — npm resolves bare `typescript` to v7 (the Go rewrite), which lacks the legacy compiler API the validate script's `.d.ts` parse check uses.
- Once, empty stray dirs `components 3` / `_screenshots 2` appeared inside `ds-bundle/` (macOS copy artifacts on this space-containing path). They contained no files; deleting them and re-running validate was clean. Watch for them before uploads.
- Playwright: chromium-headless-shell v1234 cached at `~/Library/Caches/ms-playwright` (installed 2026-07-28, playwright from `.ds-sync/node_modules`).
- DS additions made during preview grading (now part of the design system): `.btn--block { width:100% }`, `.btn:disabled/[aria-disabled]` fade, `.field:disabled` fade.
- Known render warns: `[RENDER_THIN]` on **LogoMark** and **SocialLinks** — both are icon/SVG-only components with no mounted text; sheets confirmed they render correctly. All 20 components have authored previews graded good.

## Re-sync risks

- Authored previews inline real site content (team member names, brand domains, the 7/6/33+/70,000+ stats). If the brand content changes upstream, previews keep the old copy until hand-edited.
- Shipped fonts are the latin-subset woff2 files under `assets/fonts/` only; non-latin glyphs fall back.
- The whole component library exists to mirror `assets/css/styles.css` — a class renamed there silently unstyles the matching wrapper; re-grade after any stylesheet refactor.
- `.design-sync/conventions.md` enumerates tokens and component names — re-validate it against the fresh build on every re-sync (names drift when the stylesheet or exports change).
