import React from "react";
import { useNavigate } from "react-router-dom";

const ContactDiv = ({ contacts }) => {
	const navigate = useNavigate();

	return (
		<div className="border-r border-r-white">
			<h1 className="text-2xl font-semibold font-mono pb-4">
				Reach Out Via Socials
			</h1>
			<ul>
				<li>
					<span className="text-gray-500">1</span>{" "}
					<span className="text-gray-500">.socials</span>
					{` {`}
				</li>
				{contacts.map((contact) => {
					return (
						<li>
							<span className="mr-12 text-gray-500">
								{contact.id}
							</span>
							{contact.name}:{" "}
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
					{"  }"}
				</li>
			</ul>
		</div>
	);
};

export default ContactDiv;
