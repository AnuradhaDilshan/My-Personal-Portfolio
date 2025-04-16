# My Personal Portfolio

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-EF0185?style=flat&logo=framer&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-FD1D1D?style=flat&logo=framer&logoColor=white)
![Aceternity UI](https://img.shields.io/badge/Aceternity_UI-7C3AED?style=flat&logo=vercel&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)

_Crafted with a developer’s heart and a designer’s eye_ — this portfolio blends clean visuals and performant architecture to showcase my projects, skills, and experience with animated UI components, optimized performance, and modular design.

## Features

- **Dynamic Routing**: Projects are dynamically rendered based on their unique slugs.
- **Responsive Design**: Fully responsive layout optimized for all screen sizes.
- **SEO Optimized**: Includes meta tags for better search engine visibility.
- **Performance Optimized**: Built with Next.js for fast page loads and efficient rendering.
- **404 Page**: Custom 404 page for unmatched routes.

---

## Folder Structure

The project structure is as follows:

```bash
My-Personal-Portfolio/
├── data/
│   ├── globe.json
│   └── index.ts
├── public/
│   └── assets/
├── src/
│   ├── app/
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   └── provider.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── BentoGrid.tsx
│   │   │   ├── FloatingNavbar.tsx
│   │   │   └── Spotlight.tsx
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── SocialMedia.tsx
│   │   └── Spinner.tsx
│   └── lib/
│       └── utils.ts
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── LICENSE
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## How to Run the Project

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/AnuradhaDilshan/My-Personal-Portfolio.git
   cd My-Personal-Portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Running the Project:

   ```bash
   npm run dev
   ```

## Live Website

My Personal Portfolio is live at: [https://www.anuradhadilshan.com/](https://www.anuradhadilshan.com/)

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
![Last Commit](https://img.shields.io/github/last-commit/AnuradhaDilshan/My-Personal-Portfolio)
![Repo Size](https://img.shields.io/github/repo-size/AnuradhaDilshan/My-Personal-Portfolio)
![Top Language](https://img.shields.io/github/languages/top/AnuradhaDilshan/My-Personal-Portfolio)
