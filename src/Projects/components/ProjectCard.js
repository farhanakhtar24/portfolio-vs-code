/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const TechIcon = ({ tech }) => {
	let borderColor = "";
	switch (tech.toLowerCase()) {
		case "next":
			borderColor = "border-blue-600";
			break;
		case "react":
			borderColor = "border-sky-400";
			break;
		case "tailwindcss":
			borderColor = "border-cyan-300";
			break;
		case "vercel":
			borderColor = "border-purple-300";
			break;
		case "node":
			borderColor = "border-lime-400";
			break;
		case "mongodb":
			borderColor = "border-green-600";
			break;
		case "firebase":
			borderColor = "border-amber-300";
			break;
		case "redux":
			borderColor = "border-purple-600";
			break;
		default:
			borderColor = "";
			break;
	}

	return (
		<div
			className={`rounded-full border-2 ${borderColor} py-1 px-2 text-xs transition-all`}>
			{tech}
		</div>
	);
};

const ProjectCard = ({ imgUrl, title, desc, techArr, href, liveDemo }) => {
	return (
		<div
			className="w-full bg-sidebar-blue rounded-xl overflow-hidden hover:shadow-2xl
			transition-all">
			<img
				src={imgUrl}
				alt="title"
				className="hidden sm:block w-full h-1/3 rounded-xl object-cover object-top"
			/>
			<div className="px-5 py-3 flex flex-col text-sm gap-3 mb-5 lg:mb-0">
				<div className="text-lg">{title}</div>
				<div>{desc}</div>
				<div className="flex flex-wrap gap-2">
					{techArr?.map((tech) => {
						return <TechIcon tech={tech.toLowerCase()} />;
					})}
				</div>
				<div className="flex gap-5">
					<a
						href={href}
						target="_blank"
						className="transition-all hover:bg-slate-300/40">
						Source Code
					</a>
					<a
						href={liveDemo}
						target="_blank"
						className="transition-all hover:bg-slate-300/40">
						Live Demo
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
