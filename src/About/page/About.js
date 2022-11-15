import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const About = () => {
	return (
		<div className="w-full h-full flex justify-center">
			<div className="w-3/4 h-full">
				<Viewer fileUrl="../Assets/Resume Mohd Farhan Akhtar.pdf" />
			</div>
		</div>
	);
};

export default About;
