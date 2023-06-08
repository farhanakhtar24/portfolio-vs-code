import React from "react";

const SkillsCards = ({ Icon, IconName, level }) => {
	return (
		<div
			className={`flex justify-center items-center rounded overflow-hidden group relative cursor-pointer`}>
			<div
				className="absolute flex justify-center items-center w-full h-full rounded
				text-sm sm:text-lg opacity-0 group-hover:opacity-100
				transition-all">
				{level}
			</div>
			<img
				src={Icon}
				alt={IconName}
				className="w-full group-hover:opacity-20 transition-all"
			/>
		</div>
	);
};

export default SkillsCards;
