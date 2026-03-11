# Marcos Astudillo — Personal Portfolio

Professional portfolio website for [marcosastudillo.com](https://marcosastudillo.com).

Built with **Vite + React + TypeScript + Tailwind CSS**. Static output deployable on any hosting provider including HostGator.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 + CSS Custom Properties |
| Routing | React Router v6 |
| Animations | Framer Motion |
| Icons | Lucide React |
| i18n | Custom lightweight context (EN/ES) |
| Contact Backend | PHP (`public/contact.php`) |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
webpage-portfolio/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   └── profile.png         # Profile photo
│   │   └── resume/
│   │       ├── marcos-astudillo-resume-en.pdf
│   │       └── marcos-astudillo-resume-es.pdf
│   ├── .htaccess                   # Apache SPA routing + security headers
│   ├── contact.php                 # PHP contact form handler
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/                     # Reusable atoms: Button, Badge, Card, etc.
│   │   ├── layout/                 # Header, Footer, Layout wrapper
│   │   └── sections/               # Page sections: Hero, About, Skills, etc.
│   ├── pages/                      # Route-level pages
│   ├── context/                    # ThemeContext, LanguageContext
│   ├── i18n/                       # EN/ES translations
│   ├── data/                       # Static content data
│   ├── config/                     # Site-wide configuration
│   └── styles/                     # Global CSS and design tokens
├── index.html
├── vite.config.ts
└── tailwind.config.ts
```

---

## Key Configuration

### Toggle Portfolio Mode

Edit `src/config/site.ts`:

```ts
// Show "Coming Soon" page
export const PORTFOLIO_MODE: 'coming-soon' | 'projects' = 'coming-soon'

// Switch to projects grid when ready
export const PORTFOLIO_MODE: 'coming-soon' | 'projects' = 'projects'
```

### Add Projects

Edit `src/data/projects.ts` — add entries to the `projects` array.

### Add Language

1. Create `src/i18n/xx.ts` implementing the `Translations` interface from `src/i18n/types.ts`
2. Import and add to the `translations` record in `src/context/LanguageContext.tsx`
3. Add the new language option to the language switcher in `src/components/layout/Header.tsx`

### Update Resume Files

Replace files in `public/assets/resume/`:
- `marcos-astudillo-resume-en.pdf` — English version
- `marcos-astudillo-resume-es.pdf` — Spanish version

---

## Deployment on HostGator (Shared Hosting)

1. Run `npm run build` — output is in `dist/`
2. Upload **all contents of `dist/`** to your `public_html/` directory via FTP or cPanel File Manager
3. Upload `contact.php` to the same `public_html/` directory
4. Ensure `.htaccess` is included (it handles SPA routing and security headers)
5. Update the `$recipientEmail` and `$allowedOrigin` in `contact.php` before deploying

> **Note:** The `.htaccess` is already included in `dist/` via the `public/` folder — no extra steps needed.

---

## Git Workflow

```bash
# Daily development
git checkout -b feat/your-feature-name
# ... make changes ...
git add .
git commit -m "feat: describe your change"
git push origin feat/your-feature-name
# Open a PR on GitHub

# After PR is merged, update local main
git checkout main
git pull origin main
```

### Commit Convention

| Prefix | When to use |
|---|---|
| `feat:` | New feature or section |
| `fix:` | Bug fix |
| `docs:` | Documentation update |
| `refactor:` | Code restructure, no behavior change |
| `style:` | CSS / visual changes |
| `chore:` | Config, dependencies, tooling |
| `content:` | Text or data changes |

---

## Reusing for Other Clients

This project is designed as a reusable portfolio base:

1. Fork or copy the repo
2. Update `src/config/site.ts` with the client's info
3. Replace content in `src/data/` and `src/i18n/`
4. Replace `public/assets/images/profile.png`
5. Replace resume PDFs in `public/assets/resume/`
6. Update `index.html` meta tags
7. Deploy

---

## License

MIT — feel free to use and adapt.
