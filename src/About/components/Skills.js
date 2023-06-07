import React from "react";
import SkillsCards from "./SkillsCards";

const IconsArray = [
	{
		icon: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
		name: "Babel",
	},
	{
		icon: "https://download.blender.org/branding/community/blender_community_badge_white.svg",
		name: "Blender",
	},
	{
		icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
		name: "Bootstrap",
	},
	{
		icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
		name: "C",
	},
	{
		icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
		name: "C++",
	},
	{
		icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
		name: "CSS3",
	},

	{
		icon: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
		name: "Dart",
	},
	{
		icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
		name: "Express",
	},
	{
		icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
		name: "Figma",
	},
	{
		icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
		name: "Firebase",
	},

	{
		icon: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
		name: "Flutter",
	},
	{
		icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
		name: "Git",
	},
	{
		icon: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
		name: "GraphQL",
	},
	{
		icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
		name: "HTML5",
	},
	{
		icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
		name: "JavaScript",
	},
	{
		icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
		name: "MongoDB",
	},
	{
		icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
		name: "MySQL",
	},
	{
		icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
		name: "Next.js",
	},
	{
		icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
		name: "Node.js",
	},
	{
		icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
		name: "PostgreSQL",
	},
	{
		icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
		name: "Postman",
	},
	{ icon: "https://cdn.worldvectorlogo.com/logos/pug.svg", name: "Pug" },
	{
		icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
		name: "Python",
	},
	{
		icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
		name: "Redux",
	},
	{
		icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
		name: "Sass",
	},
	{
		icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
		name: "Tailwind CSS",
	},
	{
		icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
		name: "TypeScript",
	},
	{
		icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
		name: "React",
	},
];

const Skills = () => {
	return (
		<div className="bg-page-navbar-blue shadow-2xl rounded-3xl p-5 flex justify-start items-center w-full">
			<div className="sm:grid sm:grid-cols-12 gap-5">
				{IconsArray.map((object, index) => (
					<SkillsCards
						Icon={object.icon}
						HexColor={object.hexColor}
						IconName={object.name}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default Skills;
