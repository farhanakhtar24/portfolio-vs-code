import React from "react";
import IconBar from "./IconBar";
import Navbar from "./Navbar";
import PageNavbar from "./PageNavbar";
import SideBar from "./SideBar";
import TaskBar from "./TaskBar";

const Wrapper = (props) => {
	return (
		<div className="w-screen h-screen flex flex-col overflow-auto">
			<Navbar />
			<div className="w-full flex h-full overflow-hidden">
				<IconBar />
				<SideBar />
				<div className="w-full h-full flex flex-col bg-main-pages-blue overflow-hidden">
					<PageNavbar />
					<span className="font-mono h-full overflow-auto">
						{props.children}
					</span>
				</div>
			</div>
			<TaskBar />
		</div>
	);
};

export default Wrapper;
