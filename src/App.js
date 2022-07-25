import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./About/page/About";
import Home from "./Home/page/Home";

const App = (props) => {
	return (
		<Routes>
			<Route path="/home" element={<Home />} />
			<Route path="/about" element={<About />} />
			{/* default route */}
			<Route path="*" element={<Navigate to="/home" />} />
		</Routes>
	);
};

export default App;
