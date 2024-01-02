/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const techColors = {
  next: "border-blue-600",
  react: "border-sky-400",
  tailwindcss: "border-cyan-300",
  vercel: "border-purple-300",
  node: "border-lime-400",
  mongodb: "border-green-600",
  firebase: "border-amber-300",
  redux: "border-purple-600",
  prisma: "border-slate-400", // Assuming no specific color for Prisma, using a neutral color
  zustand: "border-purple-400", // Assuming no specific color for Zustand, using a neutral color
  headlessui: "border-rose-300", // Assuming no specific color for Headlessui, using a neutral color
  cloudinary: "border-fuchsia-300", // Assuming no specific color for Cloudinary, using a neutral color
  typescript: "border-blue-500",
};

const TechIcon = ({ tech }) => {
  let borderColor = techColors[tech.toLowerCase()] || "border-white";
  return (
    <div
      className={`rounded-full border-2 ${borderColor} px-2 py-1 text-xs transition-all `}
    >
      {tech[0].toUpperCase() + tech.slice(1)}
    </div>
  );
};

const ProjectCard = ({ imgUrl, title, desc, techArr, href, liveDemo }) => {
  return (
    <div className="h-full w-full overflow-hidden rounded-xl bg-sidebar-blue transition-all hover:shadow-2xl">
      <img
        src={imgUrl}
        alt="title"
        className="hidden h-40 w-full rounded-xl object-cover object-top sm:block"
      />
      <div className="mb-5 flex flex-col gap-3 px-5 py-3 text-sm lg:mb-0">
        <div className="text-lg">{title}</div>
        <div className="text-xs">{desc}</div>
        <div className="flex flex-wrap gap-2">
          {techArr?.map((tech) => {
            return <TechIcon tech={tech.toLowerCase()} />;
          })}
        </div>
        <div className="flex gap-2">
          <a
            href={href}
            target="_blank"
            className="rounded px-2 py-1 transition-all hover:bg-slate-300/40"
          >
            Source Code
          </a>
          <a
            href={liveDemo}
            target="_blank"
            className="rounded px-2 py-1 transition-all hover:bg-slate-300/40"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
