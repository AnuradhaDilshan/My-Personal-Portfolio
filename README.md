This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Portfolio Website

A modern, responsive portfolio website built with **Next.js**, **Tailwind CSS**, and other cutting-edge technologies. This project showcases your skills, projects, and experience in a clean and professional design.

---

## Features

### General Features

- **Dynamic Routing**: Projects are dynamically rendered based on their unique slugs.
- **Responsive Design**: Fully responsive layout optimized for all screen sizes.
- **Dark Mode**: Supports light and dark themes for better user experience.
- **SEO Optimized**: Includes meta tags for better search engine visibility.
- **Performance Optimized**: Built with Next.js for fast page loads and efficient rendering.

### Functional Features

- **Portfolio Section**: Displays a list of projects with detailed descriptions and technologies used.
- **Dynamic Project Pages**: Each project has its own page with detailed information.
- **404 Page**: Custom 404 page for unmatched routes.
- **Scroll to Top**: Smooth scrolling functionality for better navigation.
- **Reusable Components**: Modular and reusable UI components for scalability.

### UI Components

- **Spotlight Animation**: Adds a dynamic visual effect to highlight sections.
- **Magic Button**: A reusable button component with customizable icons and actions.
- **PinContainer**: A component to display pinned items with hover effects.
- **CardHoverEffect**: A card component with hover animations for better interactivity.
- **Floating Navbar**: A sticky navigation bar for seamless navigation across sections.

---

## Folder Structure

Here’s the folder structure of the project:

```bash
portfolio/
├── public/ # Static assets (images, icons, etc.)
│ ├── assets/
│ │ ├── works/ # Project images
│ │ ├── skills/ # Skill icons
│ │ ├── elements/ # UI elements (e.g., 404 images)
├── src/
│ ├── app/ # Next.js app directory
│ │ ├── layout.tsx # Root layout for the app
│ │ ├── page.tsx # Main landing page
│ │ ├── projects/ # Projects section
│ │ │ ├── [slug]/ # Dynamic project pages
│ │ │ │ ├── page.tsx # Dynamic project rendering
│ │ ├── not-found.tsx # Custom 404 page
│ ├── components/ # Reusable UI components
│ │ ├── Home.tsx # Home section
│ │ ├── Portfolio.tsx # Portfolio section
│ │ ├── Projects.tsx # Dynamic project details
│ │ ├── Page404.tsx # 404 page component
│ │ ├── ui/ # UI-specific components
│ │ │ ├── Spotlight.tsx # Spotlight animation
│ │ │ ├── MagicButton.tsx # Reusable button component
│ │ │ ├── CardHoverEffect.tsx # Card hover animations
│ │ │ ├── FloatingNavbar.tsx # Sticky navigation bar
│ ├── data/ # Static data for projects and skills
│ │ ├── index.ts # Project and skill data
│ ├── styles/ # Global styles
│ │ ├── globals.css # Tailwind CSS configuration
│ ├── lib/ # Utility functions
│ │ ├── utils.ts # Helper functions
```

---

## Technologies Used

- **Next.js**: Framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React**: Component-based UI library for building interactive user interfaces.
- **Framer Motion**: Library for animations and transitions.
- **TypeScript**: Strongly typed programming language for better code quality.

---

## How to Run the Project

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the app in your browser:
   ```bash
   http://localhost:3000
   ```

## Project Data

Example project_data Structure

The project_data array in src/data/index.ts contains all the project details:

```bash
export const project_data = [
  {
    id: 1,
    title: "Driving School Management System",
    des: "Manage Driving Schools with ease using this full-featured Web Application built on the MERN Stack.",
    img: "/assets/works/p1.png",
    iconLists: [
      { icon: "/assets/skills/react.svg", name: "React" },
      { icon: "/assets/skills/express.svg", name: "Express" },
      { icon: "/assets/skills/nodejs.svg", name: "Node.js" },
      { icon: "/assets/skills/mongodb.svg", name: "MongoDB" },
      { icon: "/assets/skills/tailwind.svg", name: "Tailwind CSS" },
    ],
  },
];
```

## Key Components

Portfolio.tsx

- Displays a list of projects with a "More Info" button linking to dynamic project pages.

Projects.tsx

- Dynamically renders project details based on the slug in the URL.
- Displays the project title, description, icons, and image.

Page404.tsx

- Custom 404 page with a "Go Back to Home" button.

Spotlight.tsx

- Adds a spotlight animation effect to highlight sections.

## Screenshots

Home Page
Home Page

Portfolio Section
Portfolio Section

Project Details
Project Details

404 Page
404 Page

## Future Enhancements

- Add a blog section to showcase articles.
- Implement a contact form with email integration.
- Add unit tests for components using Jest and React Testing Library.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
