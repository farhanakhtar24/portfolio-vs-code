import React from "react";
import ProjectCard from "../components/ProjectCard";

const ProjectList = [
	{
		id: 1,
		imgUrl: "https://github.com/farhanakhtar24/portfolio-vs-code/blob/master/src/Projects/Assets/Portfolio.png?raw=true",
		title: "Portfolio",
		desc: "My Portfolio Website built using latest technologies",
		tech: ["React", "TailwindCSS", "Vercel"],
		href: "https://github.com/farhanakhtar24/portfolio-vs-code",
		liveDemo: "https://portfolio-vs-code-hoqt.vercel.app/",
	},
	{
		id: 2,
		imgUrl: "https://github.com/farhanakhtar24/portfolio-vs-code/blob/master/src/Projects/Assets/Portfolio.png?raw=true",
		title: "Portfolio",
		desc: "My Portfolio Website built using latest technologies",
		tech: ["React", "TailwindCSS", "Vercel"],
	},
	{
		id: 3,
		imgUrl: "https://github.com/farhanakhtar24/portfolio-vs-code/blob/master/src/Projects/Assets/Portfolio.png?raw=true00782-243a-460d-8e99-2ee7fe1d35b2",
		title: "Portfolio",
		desc: "My Portfolio Website built using latest technologies",
		tech: ["React", "TailwindCSS", "Vercel"],
	},
	{
		id: 4,
		imgUrl: "https://github.com/farhanakhtar24/portfolio-vs-code/blob/master/src/Projects/Assets/Portfolio.png?raw=true",
		title: "Portfolio",
		desc: "My Portfolio Website built using latest technologies",
		tech: ["React", "TailwindCSS", "Vercel"],
	},
];

const Projects = () => {
	return (
		<div className="p-7 text-white">
			<span className="text-xl sm:text-2xl">
				Stuff i've build so far...
			</span>
			<div className="grid grid-cols-4 gap-5 mt-7">
				{ProjectList.map((project) => {
					return (
						<ProjectCard
							imgUrl={project.imgUrl}
							title={project.title}
							desc={project.desc}
							tech={project.tech}
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
