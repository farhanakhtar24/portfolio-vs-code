import React from "react";

const SkillsCards = ({ Icon, IconName, level }) => {
  return (
    <div
      className={`group relative flex cursor-pointer items-center justify-center overflow-hidden rounded`}
    >
      <div
        className="absolute flex h-full w-full items-center justify-center rounded
				text-sm opacity-0 transition-all group-hover:opacity-100
				sm:text-lg"
      >
        {level}
      </div>
      <img
        src={Icon}
        alt={IconName}
        className="w-full transition-all group-hover:opacity-20"
      />
    </div>
  );
};

export default SkillsCards;
