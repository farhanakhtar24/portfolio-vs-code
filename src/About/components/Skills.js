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
    <div className="flex w-full items-center justify-start rounded-3xl bg-page-navbar-blue p-5 shadow-2xl">
      <div className="w-full gap-5 sm:grid sm:grid-cols-12">
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
