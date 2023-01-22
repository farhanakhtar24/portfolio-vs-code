import React from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const PageNavbar = ({ pages }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	return (
		<ul className="w-full bg-page-navbar-blue grid grid-cols-2 sm:flex text-sm gap-1">
			{pages.map((page) => {
				return (
					<li className="flex flex-col">
						{pathname === page.link ? (
							<motion.div
								className={`w-full h-0.5 bg-white/80`}
								layoutId="underline"
							/>
						) : (
							<div
								className={`w-full h-0.5 bg-transparent`}
								layoutId="underline"
							/>
						)}
						<div
							onClick={() => navigate(page.link)}
							className={`px-5 py-1 border-t border-t-nav-blue flex items-center
                        ${
							pathname === page.link
								? "text-white bg-main-pages-blue"
								: "text-gray-500  "
						} hover:text-white hover:cursor-pointer`}>
							{page.icon}
							&nbsp;&nbsp;
							{page.name}
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default PageNavbar;
