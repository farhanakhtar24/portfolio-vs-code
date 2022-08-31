import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./About/page/About";
import Home from "./Home/page/Home";
import Wrapper from "./Layout/Wrapper";
import Projects from "./Projects/page/Projects";

const App = (props) => {
	return (
		<Wrapper>
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				{/* default route */}
				<Route path="*" element={<Navigate to="/home" />} />
			</Routes>
		</Wrapper>
	);
};

export default App;
