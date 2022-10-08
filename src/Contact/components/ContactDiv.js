import React from "react";
import { useNavigate } from "react-router-dom";

const ContactDiv = ({ contacts }) => {
	const navigate = useNavigate();

	return (
		<div className="lg:border-r lg:border-r-white sm:text-xl text-sm">
			<h1 className="text-xl sm:text-2xl font-semibold font-mono pb-4">
				Reach Out Via Socials
			</h1>
			<ul>
				<li>
					<span className="text-gray-500">1&nbsp;&nbsp;</span>
					<span className="text-gray-500">.socials</span>
					&nbsp;{`{`}
				</li>
				{contacts.map((contact) => {
					return (
						<li>
							<span className="text-gray-500">{contact.id}</span>
							&nbsp;&nbsp;&nbsp;&nbsp;{contact.name}&nbsp;:&nbsp;
							<a
								href={contact.link}
								target="_blank"
								className="text-gray-500 hover:underline hover:text-white"
								rel="noreferrer">
								{contact.display};
							</a>
						</li>
					);
				})}
				<li>
					<span className="text-gray-500">7</span>
					&nbsp;&nbsp;{"}"}
				</li>
			</ul>
		</div>
	);
};

export default ContactDiv;
