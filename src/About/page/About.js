import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/zoom/lib/styles/index.css";

import pdf from "../Assets/Resume Mohd Farhan Akhtar.pdf";

const About = () => {
	const getFilePluginInstance = getFilePlugin();
	const { DownloadButton } = getFilePluginInstance;

	const zoomPluginInstance = zoomPlugin();
	const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

	return (
		<div className="w-full h-full p-4 sm:p-7">
			{/* <div className="w-3/4 flex bg-white justify-between p-1">
				<DownloadButton />
				<div className="flex">
					<ZoomOutButton />
					<ZoomPopover />
					<ZoomInButton />
				</div>
			</div>
			<div className="w-3/4 h-full overflow-clip">
				<Viewer
					fileUrl={pdf}
					theme="dark"
					plugins={[getFilePluginInstance, zoomPluginInstance]}
				/>
			</div> */}
		</div>
	);
};

export default About;
