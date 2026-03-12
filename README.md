# Marcos Astudillo --- Personal Portfolio

[![Live
Demo](https://img.shields.io/badge/Live-Demo-blueviolet?logo=google-chrome)](https://marcosastudillo.com)
[![GitHub
Repo](https://img.shields.io/badge/GitHub-Repository-181717?logo=github)](https://github.com/marcos-astudillo/webpage-portfolio)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/license-MIT-green)

Professional portfolio website for
**[marcosastudillo.com](https://marcosastudillo.com)**.

Built with **Vite + React + TypeScript + Tailwind CSS**.\
The project outputs a **static build** that can be deployed on almost
any hosting provider, including **HostGator shared hosting**.

------------------------------------------------------------------------

## Preview

Add a screenshot of the site here after deployment.

    docs/
       preview.png

Then reference it like:

    ![Portfolio Screenshot](images/webpage.png)

------------------------------------------------------------------------

## Features

-   🌙 Dark / Light theme toggle
-   🌎 English / Spanish language switch
-   📱 Fully responsive design
-   🧩 Modular component architecture
-   📂 Reusable portfolio system
-   📨 Contact form with captcha protection
-   ⚡ Fast static build using Vite
-   🧱 Clean project structure designed for reuse

------------------------------------------------------------------------

## Tech Stack

  Layer             Technology
  ----------------- ----------------------------------------
  Framework         React 18 + TypeScript
  Build Tool        Vite 5
  Styling           Tailwind CSS 3 + CSS Custom Properties
  Routing           React Router v6
  Animations        Framer Motion
  Icons             Lucide React
  i18n              Custom lightweight context (EN/ES)
  Contact Backend   PHP (`public/form-handler.php`)

------------------------------------------------------------------------

## Getting Started

Install dependencies:

    npm install

Run development server:

    npm run dev

Build production bundle:

    npm run build

Preview production build locally:

    npm run preview

------------------------------------------------------------------------

## Project Structure

    webpage-portfolio/
    ├── public/
    │   ├── assets/
    │   │   ├── images/
    │   │   │   └── profile.png
    │   │   └── resume/
    │   │       ├── marcos-astudillo-resume-en.pdf
    │   │       └── marcos-astudillo-resume-es.pdf
    │   ├── .htaccess
    │   ├── form-handler.php
    │   └── favicon.svg
    ├── src/
    │   ├── components/
    │   │   ├── ui/
    │   │   ├── layout/
    │   │   └── sections/
    │   ├── pages/
    │   ├── context/
    │   ├── i18n/
    │   ├── data/
    │   ├── config/
    │   └── styles/
    ├── index.html
    ├── vite.config.ts
    └── tailwind.config.ts

------------------------------------------------------------------------

## Key Configuration

### Toggle Portfolio Mode

Edit:

    src/config/site.ts

Example:

    export const PORTFOLIO_MODE: 'coming-soon' | 'projects' = 'coming-soon'

When projects are ready:

    export const PORTFOLIO_MODE: 'coming-soon' | 'projects' = 'projects'

------------------------------------------------------------------------

### Add Projects

Edit:

    src/data/projects.ts

Add new entries to the `projects` array.

------------------------------------------------------------------------

### Add a Language

1.  Create a new translation file in:

```{=html}
<!-- -->
```
    src/i18n/

Example:

    src/i18n/fr.ts

2.  Implement the `Translations` interface from:

```{=html}
<!-- -->
```
    src/i18n/types.ts

3.  Register the language in:

```{=html}
<!-- -->
```
    src/context/LanguageContext.tsx

4.  Add the language option to the language switcher in:

```{=html}
<!-- -->
```
    src/components/layout/Header.tsx

------------------------------------------------------------------------

### Update Resume Files

Replace the files in:

    public/assets/resume/

    marcos-astudillo-resume-en.pdf
    marcos-astudillo-resume-es.pdf

------------------------------------------------------------------------

## Deployment (HostGator Shared Hosting)

1.  Build the project:

```{=html}
<!-- -->
```
    npm run build

2.  The compiled site will be inside:

```{=html}
<!-- -->
```
    dist/

3.  Upload **all files inside `dist/`** to:

```{=html}
<!-- -->
```
    public_html/

using **FTP or cPanel File Manager**.

4.  Upload the contact backend:

```{=html}
<!-- -->
```
    public/form-handler.php

to the same directory.

5.  Ensure `.htaccess` is uploaded.

6.  Configure the email in:

```{=html}
<!-- -->
```
    form-handler.php

Example:

    $recipientEmail = "your@email.com";

------------------------------------------------------------------------

## Git Workflow

Typical development workflow:

    git checkout -b feat/feature-name
    git add .
    git commit -m "feat: describe your change"
    git push origin feat/feature-name

After merge:

    git checkout main
    git pull origin main

### Commit Convention

  Prefix      Purpose
  ----------- ----------------------
  feat:       New feature
  fix:        Bug fix
  docs:       Documentation
  refactor:   Code restructuring
  style:      Visual changes
  chore:      Tooling / config
  content:    Text or data updates

------------------------------------------------------------------------

## Reusing This Project for Other Clients

This repository is structured as a **reusable portfolio template**.

Steps:

1.  Fork or copy the repository
2.  Update:

```{=html}
<!-- -->
```
    src/config/site.ts

3.  Replace content in:

```{=html}
<!-- -->
```
    src/data/
    src/i18n/

4.  Replace:

```{=html}
<!-- -->
```
    public/assets/images/profile.png

5.  Replace resume files.

6.  Update SEO metadata in:

```{=html}
<!-- -->
```
    index.html

7.  Deploy.

------------------------------------------------------------------------

## License

This project is licensed under the MIT License.

See the [LICENSE](LICENSE) file for details.

---

## 📫 Connect With Me

<p align="center">

  <a href="https://www.marcosastudillo.com">
    <img src="https://img.shields.io/badge/Website-marcosastudillo.com-blueviolet?style=for-the-badge&logo=google-chrome" />
  </a>

  <a href="https://www.linkedin.com/in/marcos-astudillo-c/">
    <img src="https://img.shields.io/badge/LinkedIn-Marcos%20Astudillo-blue?style=for-the-badge&logo=linkedin" />
  </a>

  <a href="https://github.com/marcos-astudillo">
    <img src="https://img.shields.io/badge/GitHub-Marcos%20Astudillo-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>

  <a href="mailto:m.astudillo1986@gmail.com">
    <img src="https://img.shields.io/badge/Email-m.astudillo1986%40gmail.com-red?style=for-the-badge&logo=gmail" />
  </a>

</p>
