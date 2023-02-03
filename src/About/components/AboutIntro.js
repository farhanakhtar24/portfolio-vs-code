import React from "react";

const AboutIntro = () => {
	return (
		<div className="flex flex-col sm:grid sm:grid-cols-2 gap-10 bg-page-navbar-blue shadow-2xl rounded-3xl p-5">
			<div className="flex flex-col gap-5">
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-5">
						<div className="font-semibold">
							Hello, I'm Farhan Akhtar
						</div>
						<div className="text-sm sm:text-base">
							I'm a pre-final year Electrical Engineering Student
							pursuing from Jamia Millia Islamia University.
						</div>
						<div className="text-sm sm:text-base">
							I'm a passionate full stack web developer. I love
							learning new technologies and building stuff. I love
							to write code and have a good experience in
							developing web apps. I'm a self taught developer and
							have good knowledge of web development technologies.
						</div>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2">
				<ul className="flex flex-col gap-4">
					<li>
						<span className="font-semibold">AGE:</span>
					</li>
					<li>
						<span className="font-semibold">EMAIL:</span>
					</li>
					<li>
						<span className="font-semibold">PHONE:</span>
					</li>
					<li>
						<span className="font-semibold">ADDRESS:</span>
					</li>
				</ul>
				<ul className="flex flex-col gap-4">
					<li>
						<span className="">20</span>
					</li>
					<li>
						<span className="">akhtar.farhan779@gmail.com</span>
					</li>
					<li>
						<span className="">+91 955-757-8576</span>
					</li>
					<li>
						<span className="">110025, New Delhi, India</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AboutIntro;
