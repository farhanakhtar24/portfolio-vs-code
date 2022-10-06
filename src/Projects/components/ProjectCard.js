import React from "react";

const Next = () => {
	return (
		<div className="rounded-full border-2 border-blue-600 py-1 px-2 text-xs transition-all">
			next
		</div>
	);
};

const Node = () => {
	return (
		<div className="rounded-full border-2 border-lime-400 py-1 px-2 text-xs transition-all">
			node
		</div>
	);
};

const MongoDB = () => {
	return (
		<div className="rounded-full border-2 border-green-600 py-1 px-2 text-xs transition-all">
			mongodb
		</div>
	);
};

const Tailwind = () => {
	return (
		<div className="rounded-full border-2 border-cyan-300 py-1 px-2 text-xs transition-all">
			tailwind
		</div>
	);
};

const Redux = () => {
	return (
		<div className="rounded-full border-2 border-purple-600 py-1 px-2 text-xs transition-all">
			redux
		</div>
	);
};

const ReactIcon = () => {
	return (
		<div className="rounded-full border-2 border-sky-400 py-1 px-2 text-xs transition-all">
			react
		</div>
	);
};

const Firebase = () => {
	return (
		<div className="rounded-full border-2 border-amber-300 py-1 px-2 text-xs transition-all">
			firebase
		</div>
	);
};

const ProjectCard = ({ imgUrl, title, desc, tech, href, liveDemo }) => {
	return (
		<div
			className="w-full bg-sidebar-blue rounded-xl overflow-hidden hover:shadow-2xl 
            transition-all cursor-pointer ">
			<img src={imgUrl} alt="title" className="w-full h-1/3 rounded-xl" />
			<div className="px-5 py-3 flex flex-col text-sm gap-5">
				<div className="text-lg">{title}</div>
				<div>{desc}</div>
				<div className="flex flex-wrap gap-2">
					<Next />
					<Node />
					<MongoDB />
					<Tailwind />
					<Redux />
					<ReactIcon />
					<Firebase />
				</div>
				<div className="flex gap-5">
					<a
						href={href}
						target="_blank"
						className="transition-all hover:bg-slate-300/40 ">
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
