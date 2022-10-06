import React from "react";

const ProjectCard = ({ imgUrl, title, desc, tech }) => {
	return (
		<div className="w-full h-80 border border-white rounded-xl overflow-hidden">
			<img
				src={
					"https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png"
				}
				alt="title"
				className="w-full h-1/2"
			/>
		</div>
	);
};

export default ProjectCard;
