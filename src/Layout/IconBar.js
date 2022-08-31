import React from "react";
import { VscFiles } from "react-icons/vsc";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { Link, useLocation, useParams } from "react-router-dom";

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
		<ul className="flex flex-col w-16 bg-iconbar-blue text-gray-500 text-xl">
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
	);
};

export default IconBar;
