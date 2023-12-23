import React from "react";
import ProjectCard from "../components/ProjectCard";
import fifaTableImage from "../Assets/fifa-table-app.png";
import yangFormImage from "../Assets/yang-form.png";
import portfolioImage from "../Assets/Portfolio.png";
import tarsImage from "../Assets/tarsImage.png";

const ProjectList = [
  {
    id: 1,
    imgUrl: fifaTableImage,
    title: "Fifa-Table-App",
    desc: "A simple points table simulation app, built on top of Next js , using the frameworks like Tailwind Css and using redux toolkit for state management.",
    techArr: ["Next", "TailwindCSS", "Vercel", "MongoDB", "redux"],
    href: "https://github.com/farhanakhtar24/fifa-table-app",
    liveDemo: "https://fifa-table-app.vercel.app/",
  },
  {
    id: 2,
    imgUrl: tarsImage,
    title: "Tars Image Gallery",
    desc: "An Image Gallery webapp built using Next.js, TailwindCSS and utilizing the Unsplash API.",
    techArr: ["Next.js", "TailwindCSS", "Vercel"],
    href: "https://github.com/farhanakhtar24/tars",
    liveDemo: "https://tars-beta.vercel.app/",
  },
  {
    id: 3,
    imgUrl: yangFormImage,
    title: "Yang-Form",
    desc: "Yang Form is a web-based app used to create forms for data collection purposes.",
    techArr: ["React", "TailwindCSS", "Vercel", "redux", "firebase", "node"],
    href: "",
    liveDemo: "https://yang-form.netlify.app/",
  },
  {
    id: 4,
    imgUrl: portfolioImage,
    title: "Portfolio",
    desc: "My Portfolio Website built using latest technologies",
    techArr: ["React", "TailwindCSS", "Vercel", "redux"],
    href: "https://github.com/farhanakhtar24/portfolio-vs-code",
    liveDemo: "https://farhanakhtar24.vercel.app",
  },
];

const Projects = () => {
  return (
    <div className="h-full w-full overflow-auto p-4 text-white sm:p-7">
      <span className="text-xl font-semibold sm:text-2xl">
        Stuff i've build so far...
      </span>
      <div className="mt-7 flex flex-col gap-5 overflow-auto sm:grid sm:grid-cols-3 lg:grid-cols-4">
        {ProjectList.map((project) => {
          return (
            <ProjectCard
              imgUrl={project.imgUrl}
              title={project.title}
              desc={project.desc}
              techArr={project.techArr}
              href={project.href}
              liveDemo={project.liveDemo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
