import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";
import { DiCss3Full } from "react-icons/di";
import { GoMarkGithub } from "react-icons/go";

const pages = [
	{
		id: 1,
		link: "/home",
		name: "home.jsx",
		icon: <FaReact className="text-[#00D8FF]" />,
	},
	{
		id: 2,
		link: "/about",
		name: "about.html",
		icon: <AiFillHtml5 className="text-[#F1662A]" />,
	},
	{
		id: 3,
		link: "/projects",
		name: "projects.js",
		icon: <SiJavascript className="text-[#F5DE19]" />,
	},
	{
		id: 4,
		link: "/github",
		name: "github.md",
		icon: <GoMarkGithub className="text-[#fff]" />,
	},
	{
		id: 5,
		link: "/contact",
		name: "contact.css",
		icon: <DiCss3Full className="text-[#33A9DC]" />,
	},
];

const SideBar = () => {
	const [angle, setAngle] = useState(true);
	const { pathname } = useLocation();

	return (
		<div className="w-56 hidden lg:block shrink-0 bg-sidebar-blue border-l border-l-black text-white">
			{/* heading explorer */}
			<h1 className="p-2 text-sm tracking-wider">EXPLORER</h1>
			{/* portfolio indexer */}
			<div className="p-2 drop-shadow-xl">
				<div
					className="flex items-center cursor-pointer space-x-1"
					onClick={() => setAngle((prev) => !prev)}>
					<IoIosArrowDown
						className={`transition-all ${
							angle === true ? "" : "-rotate-90"
						}`}
					/>
					<h1 className="text-sm font-medium tracking-wide">
						PORTFOLIO
					</h1>
				</div>
				{angle && (
					<ul className="text-sm pt-3 flex flex-col gap-2">
						{pages.map((page) => {
							return (
								<Link
									to={page.link}
									className={`pl-5 flex items-center ${
										pathname === page.link
											? "text-white"
											: "text-gray-500"
									} hover:text-white`}>
									{page.icon}
									<span className="ml-1">{page.name}</span>
								</Link>
							);
						})}
					</ul>
				)}
			</div>
		</div>
	);
};

export default SideBar;
