"use client";

import { useParams } from "next/navigation";
import { project_data } from "../../../../data/index";
import NotFound from "@/app/not-found";
import Projects from "@/components/Projects";

// Keep the Project interface for documentation
interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: { icon: string; name: string }[];
  visit?: { icon: string; link: string }[];
  image?: string;
  image_ui?: string;
  readme?: string;
}

const ProjectsPage = () => {
  const { slug } = useParams();

  const project = project_data.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <Projects project={project} />
    </main>
  );
};

export default ProjectsPage;
