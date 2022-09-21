import React from "react";

const Form = () => {
	return (
		<div>
			<h1 className="text-2xl font-semibold font-mono pb-4">
				Or Fill Out This Form
			</h1>
			<form className="grid grid-cols-2 grid-rows-3">
				<div className="flex flex-col">
					<span className="tracking-wider text-sm">NAME</span>
					<input />
				</div>
				<div className="flex flex-col">
					EMAIL
					<input />
				</div>
			</form>
		</div>
	);
};

export default Form;
