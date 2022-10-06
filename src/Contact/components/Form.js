import React, { useRef } from "react";
import Input from "./Input";

const Form = () => {
	const nameRef = useRef("");
	const emailRef = useRef("");
	return (
		<div>
			<h1 className="text-xl sm:text-2xl font-semibold font-mono pb-4">
				Or Fill Out This Form
			</h1>
			<form className="grid grid-cols-2 grid-rows-3 gap-5">
				<div className="flex flex-col">
					<span className="tracking-widest text-sm font-semibold">
						NAME
					</span>
					<Input dataRef={nameRef} />
				</div>
				<div className="flex flex-col">
					<span className="tracking-widest text-sm font-semibold">
						EMAIL
					</span>
					<Input dataRef={emailRef} />
				</div>
			</form>
		</div>
	);
};

export default Form;
