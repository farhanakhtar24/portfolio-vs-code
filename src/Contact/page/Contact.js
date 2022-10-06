import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ContactDiv from "../components/ContactDiv";
import Form from "../components/Form";

const contacts = [
	{
		id: 2,
		name: "email",
		link: "mailto:akhtar.farhan779@gmail.com",
		display: "akhtar.farhan779@gmail.com",
	},
	{
		id: 3,
		name: "github",
		link: "https://github.com/farhanakhtar24",
		display: "farhanakhtar24",
	},
	{
		id: 4,
		name: "linkedin",
		link: "https://www.linkedin.com/in/mohd-farhan-akhtar/",
		display: "mohd-farhan-akhtar",
	},
	{
		id: 5,
		name: "twitter",
		link: "https://twitter.com/MohdFarhanAkht9",
		display: "MohdFarhanAkht9",
	},
	{
		id: 6,
		name: "instagram",
		link: "https://www.instagram.com/_mohd.farhan.akhtar_/",
		display: "_mohd.farhan.akhtar_",
	},
];

const Contact = () => {
	return (
		<div className="p-7 flex flex-col md:grid md:grid-cols-2 gap-5 text-white font-mono text-lg">
			<ContactDiv contacts={contacts} />
			<Form />
		</div>
	);
};

export default Contact;
