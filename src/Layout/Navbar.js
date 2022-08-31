import React from "react";
import VSCodeIcon from "../Visual_Studio_Code_1.35_icon.png";
import { MdMinimize } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { BiWindows } from "react-icons/bi";

const navList = [
	{
		id: 1,
		name: "File",
	},
	{
		id: 2,
		name: "Edit",
	},
	{
		id: 3,
		name: "Selection",
	},
	{
		id: 4,
		name: "View",
	},
	{
		id: 5,
		name: "Go",
	},
	{
		id: 8,
		name: "Help",
	},
];

const Navbar = () => {
	return (
		<nav
			className="flex justify-between md:grid md:grid-cols-3 items-center h-6 text-sm 
		bg-nav-blue text-gray-300">
			<ul className="flex items-center h-6">
				<img src={VSCodeIcon} alt="VScodeIcon" className="w-6 p-1" />
				{navList.map((item) => {
					return (
						<li
							key={item.id}
							className="px-2 cursor-pointer hidden lg:flex hover:bg-gray-700 hover:text-white rounded items-center h-full">
							{item.name}
						</li>
					);
				})}
			</ul>
			<p className="flex justify-center items-center font-semibold text-xs sm:text-base truncate">
				Mohd Farhan Akhtar - Visual Studio Code
			</p>
			<ul className="flex justify-end h-6 items-center text-xs sm:text-lg">
				<li className="px-2 hover:bg-gray-700 hover:text-white rounded cursor-pointer h-full flex items-center">
					<MdMinimize />
				</li>
				<li className="px-2 hover:bg-gray-700 hover:text-white rounded cursor-pointer h-full flex items-center">
					<BiWindows />
				</li>
				<li className="px-2 hover:bg-gray-700 hover:text-white rounded cursor-pointer h-full flex items-center">
					<IoCloseSharp />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
