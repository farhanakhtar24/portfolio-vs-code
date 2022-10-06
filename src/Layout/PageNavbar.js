import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { SiJavascript } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";

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

const PageNavbar = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	return (
		<ul className="w-full bg-page-navbar-blue grid grid-cols-2 sm:flex text-sm gap-1">
			{pages.map((page) => {
				return (
					<li
						onClick={() => navigate(page.link)}
						className={`px-5 py-1 border-t border-t-nav-blue flex items-center
                        ${
							pathname === page.link
								? "text-white bg-main-pages-blue border-t-white"
								: "text-gray-500  "
						} hover:text-white hover:cursor-pointer`}>
						{page.icon}
						&nbsp;&nbsp;
						{page.name}
					</li>
				);
			})}
		</ul>
	);
};

export default PageNavbar;
