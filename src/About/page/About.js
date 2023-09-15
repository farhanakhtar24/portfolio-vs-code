import React from "react";
import AboutIntro from "../components/AboutIntro";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

const About = () => {
	return (
		<div className="w-full h-full p-4 sm:p-7 text-white overflow-auto flex flex-col gap-5">
			<div className="text-xl sm:text-2xl font-semibold">
				A Little about me
			</div>
			<AboutIntro />
			<div className="text-xl sm:text-2xl font-semibold mt-5">
				Professional Skills
			</div>
			<Skills />
			<div className="text-xl sm:text-2xl font-semibold mt-5">
				Experience
			</div>
			<Experience />
		</div>
	);
};

export default About;
