import React from "react";
import AboutIntro from "../components/AboutIntro";

const About = () => {
	return (
		<div className="w-full h-full p-4 sm:p-7 text-white overflow-auto flex flex-col gap-5">
			<div className="text-xl sm:text-2xl font-semibold">
				A Little about me
			</div>
			<div className="flex flex-col">
				{/* make a card with 2 cols in a grid*/}
				<AboutIntro />
			</div>
		</div>
	);
};

export default About;
