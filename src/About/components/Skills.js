import React from "react";
import SkillsCards from "./SkillsCards";
import {
	DbArray,
	FrameworksArray,
	LanguagesArray,
	ToolsArray,
} from "./IconArray";

const Skills = () => {
	return (
		<div className="bg-page-navbar-blue shadow-2xl rounded-3xl p-5 flex justify-start items-center w-full">
			<div className="sm:grid sm:grid-cols-12 gap-5 w-full">
				{LanguagesArray.map((object, index) => (
					<SkillsCards
						Icon={object.icon}
						IconName={object.name}
						level={object.level}
						key={index}
					/>
				))}
				{FrameworksArray.map((object, index) => (
					<SkillsCards
						Icon={object.icon}
						IconName={object.name}
						level={object.level}
						key={index}
					/>
				))}
				{ToolsArray.map((object, index) => (
					<SkillsCards
						Icon={object.icon}
						IconName={object.name}
						level={object.level}
						key={index}
					/>
				))}
				{DbArray.map((object, index) => (
					<SkillsCards
						Icon={object.icon}
						IconName={object.name}
						level={object.level}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default Skills;
