import React from "react";
import ProjectCard from "../components/ProjectCard";
import fifaTableImage from "../Assets/fifa-table-app.png";
import yangFormImage from "../Assets/yang-form.png";
import portfolioImage from "../Assets/Portfolio.png";

// Tech Allowed
// [next, react, tailwindcss, vercel, node, mongodb, firebase, redux]

const ProjectList = [
	{
		id: 1,
		imgUrl: fifaTableImage,
		title: "Fifa-Table-App",
		desc: "A simple points table simulation app, built on top of Next js , using the frameworks like Tailwind Css and using redux toolkit for state management.",
		techArr: ["Next", "TailwindCSS", "Vercel", "MongoDB", "redux"],
		href: "https://github.com/farhanakhtar24/portfolio-vs-code",
		liveDemo: "https://portfolio-vs-code-hoqt.vercel.app/",
	},
	{
		id: 2,
		imgUrl: yangFormImage,
		title: "Yang-Form",
		desc: "Yang Form is a web-based app used to create forms for data collection purposes.",
		techArr: [
			"React",
			"TailwindCSS",
			"Vercel",
			"redux",
			"firebase",
			"node",
		],
		href: "",
		liveDemo: "https://yang-form.netlify.app/",
	},
	{
		id: 3,
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
		<div className="p-4 sm:p-7 text-white overflow-auto">
			<span className="text-xl sm:text-2xl font-semibold">
				Stuff i've build so far...
			</span>
			<div className="flex flex-col sm:grid sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-7 overflow-auto">
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
