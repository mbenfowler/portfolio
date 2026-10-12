# mben portfolio

**Live site: [https://mben.vercel.app](https://mben.vercel.app)**

Personal portfolio for Matt Fowler. A single-page React app with a splash page (intro, resume link, project carousel) and a resume page. Hand-built, dark by default, with a light mode toggle and an English/Croatian language switch.

## Stack

- React 18 + TypeScript, bootstrapped with Create React App (`react-scripts` 5)
- React Router 6 for the two routes
- SCSS per component
- `react-alice-carousel` for the Works carousel
- Deployed on Vercel with Vercel Analytics

Node 24 is pinned in `package.json` (`engines`) because Vercel builds on it.

## Running locally

```powershell
npm install
npm start
```

Opens at `http://localhost:3000`. Hot reload is on.

```powershell
npm run build   # production build to ./build
npx tsc --noEmit -p .   # type check only
```

## Layout

```
public/
  images/            project screenshots, avatar, nav icons
  index.html         loads Megrim (logo) and JetBrains Mono (body) from Google Fonts
src/
  index.tsx          mounts the app, wraps it in LocaleProvider + BrowserRouter
  index.css          global reset and body font stack
  components/
    App/             routes, dark mode state, theme CSS variables (App.scss)
    Nav/             logo, dark mode toggle, language picker, GitHub/LinkedIn links
    Home/            splash page: AboutMe + Works
    AboutMe/         avatar, intro copy, Resume button, firefly animation
    Works/           carousel of project cards; worksData.tsx holds the projects
    Card/            one project card (image, tags, description, Visit/Repo links)
    Tag/             small tech pill used on cards
    Resume/          resume page; resumeData.tsx holds skills, experience, education
    Project/         placeholder route (/work/:id), not wired up
    EmptyState/      404 fallback
  context/Locale/    reducer-based locale context, loads strings from src/locales
  locales/
    en.json, hr.json user-facing strings, keyed identically
```

## Routes

| Path | Component |
|---|---|
| `/` | Home (AboutMe + Works) |
| `/resume` | Resume |
| `/work/:id` | Project (empty placeholder) |
| `*` | EmptyState |

## Editing content

**Projects.** Add or remove entries in `src/components/Works/worksData.tsx`. Each project needs a screenshot in `public/images/`, a description key present in both locale files, and a `repo` link. `deployLink` is optional; leave it out and the card shows only a Repo button.

**Resume.** Edit `src/components/Resume/resumeData.tsx`. Skills are four labeled groups rendered as pill tags, with the first group filled to draw the eye. Jobs with `current: true` get a localized "Present" appended to their start date. The canonical resume lives in the sibling `Resumes` repo; this page is a lighter mirror of it, so keep it to titles, companies, and dates.

**Strings.** Every user-facing string lives in `src/locales/en.json` and `src/locales/hr.json`. Add keys to both files or the Croatian view will render `undefined`.

**Theme.** Colors are CSS variables set in `src/components/App/App.scss` under `[data-theme='dark']` and `[data-theme='light']`. The accent (`--card-shadow`, `--firefly-flash`) is lime in dark mode and purple in light mode.

**Fonts.** The body stack is `Monaco, 'JetBrains Mono', Menlo, Consolas, monospace`. Monaco is macOS only; JetBrains Mono is loaded from Google Fonts so other platforms match.

## Deploying

Every push to `main` deploys to Vercel. There is no CI step; run the type check and build locally before pushing.
