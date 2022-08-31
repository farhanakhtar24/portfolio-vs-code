import React from "react";
import { VscFiles } from "react-icons/vsc";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { VscSettingsGear } from "react-icons/vsc";

const icons = [
	{
		id: 1,
		icon: <VscFiles />,
		page: "/home",
	},
	{
		id: 2,
		icon: <BsSearch />,
		page: "/about",
	},
	{
		id: 3,
		icon: <AiOutlineFundProjectionScreen />,
		page: "/projects",
	},
];

const IconBar = () => {
	const { pathname } = useLocation();
	return (
		<div className="flex flex-col w-16 justify-between bg-iconbar-blue text-gray-500 text-xl">
			<ul className="flex flex-col">
				{icons.map((icon) => {
					return (
						<Link
							to={icon.page}
							key={icon.id}
							className={`flex justify-center items-center py-3 px-2 hover:text-white border-l
						${
							pathname === icon.page
								? "border-l-white text-white"
								: "border-l-iconbar-blue"
						}`}>
							{icon.icon}
						</Link>
					);
				})}
			</ul>
			<ul className="flex flex-col">
				<li
					className={`flex justify-center items-center py-3 px-2 hover:text-white 
					border-l border-l-iconbar-blue cursor-pointer`}>
					<VscAccount />
				</li>
				<li
					className={`flex justify-center items-center py-3 px-2 hover:text-white
					border-l border-l-iconbar-blue cursor-pointer`}>
					<VscSettingsGear />
				</li>
			</ul>
		</div>
	);
};

export default IconBar;
