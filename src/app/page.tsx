"use client";

import { navItems } from "../../data/index";
import Home from "@/components/Home";
import Education from "@/components/Education";
import Grid from "@/components/Grid";
import Portfolio from "@/components/Portfolio";
import { Skills } from "@/components/Skills";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import Experience from "@/components/Experience";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ScrollToTop from "@/components/ScrollToTop";

const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Home />
        <Education />
        <Grid />
        <Portfolio />
        <Skills />
        <Blog />
        <Experience />
        <Footer />
        <ScrollToTop />
      </div>
    </main>
  );
};

export default page;
