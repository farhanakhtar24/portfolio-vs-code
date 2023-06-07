import React from "react";

const SkillsCards = ({ Icon, HexColor, IconName }) => {
	return (
		<div className={`flex justify-center items-center rounded`}>
			<img src={Icon} alt={IconName} className="w-full" />
		</div>
	);
};

export default SkillsCards;
