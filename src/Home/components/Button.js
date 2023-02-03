import React from "react";

const Button = (props) => {
	return (
		<button className="w-32 border border-black p-2 interFont transition-all hover:border-white active:border-white active:scale-95 rounded">
			{props.children}
		</button>
	);
};

export default Button;
