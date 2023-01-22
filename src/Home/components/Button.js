import React from "react";

const Button = (props) => {
	return (
		<button className="border border-black p-2 interFont transition-all hover:border-white active:scale-95 rounded">
			{props.children}
		</button>
	);
};

export default Button;
