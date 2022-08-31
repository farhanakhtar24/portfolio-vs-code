import React from "react";
import { BiGitBranch } from "react-icons/bi";
import { BiError } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { VscCheckAll } from "react-icons/vsc";
import { BsBellFill } from "react-icons/bs";

const TaskBar = () => {
	return (
		<div className="flex justify-between h-6 bg-taskbar-blue text-gray-300 items-center px-2">
			<div className="flex items-center space-x-2 h-full">
				{/* // branch */}
				<div className="flex rounded hover:bg-gray-700 hover:text-white cursor-pointer h-full items-center">
					<BiGitBranch />
					<span className="text-xs">main</span>
				</div>
				{/* lint icons */}
				<div className="flex rounded hover:bg-gray-700 hover:text-white cursor-pointer h-full items-center space-x-1">
					<AiOutlineCloseCircle />
					<span className="text-xs">0</span>
					<BiError />
					<span className="text-xs">0</span>
				</div>
			</div>
			<div className="flex items-center space-x-4 h-full">
				<div className="flex rounded hover:bg-gray-700 hover:text-white cursor-pointer h-full items-center">
					<FaReact className="text-xs" />
					<span className="text-xs">Powered by React.js</span>
				</div>
				<div className="flex rounded hover:bg-gray-700 hover:text-white cursor-pointer h-full items-center">
					<VscCheckAll className="text-lg" />
					<span className="text-xs">Prettier</span>
				</div>
				<div className="flex rounded hover:bg-gray-700 hover:text-white cursor-pointer h-full items-center">
					<BsBellFill className="text-xs" />
				</div>
			</div>
		</div>
	);
};

export default TaskBar;
