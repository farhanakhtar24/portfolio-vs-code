import React from "react";

const SkillsCards = ({ Icon, HexColor, IconName }) => {
	return (
		<div className={`w-18 h-18 rounded`}>
			<img src={Icon} alt={IconName} className="w-full h-full" />
		</div>
	);
};

export default SkillsCards;
