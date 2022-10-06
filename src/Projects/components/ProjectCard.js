import React from "react";

const ProjectCard = ({ imgUrl, title, desc, tech }) => {
	return (
		<div className="w-full h-80 border border-white rounded-xl">
			<img src={imgUrl} alt="title" className="w-full h-1/2" />
		</div>
	);
};

export default ProjectCard;
