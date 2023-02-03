import React from "react";

const AboutIntro = () => {
	return (
		<div className="flex flex-col sm:grid sm:grid-cols-2 gap-5 bg-page-navbar-blue shadow-2xl rounded-3xl p-5">
			<div className="flex flex-col gap-5">
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-5">
						<div className="font-semibold">
							Hello, I'm Farhan Akhtar
						</div>
						<div className="text-sm sm:text-base">
							Hey there! I m a final year Electronics And
							Communication Engineering Student pursuing from
							Jamia Millia Islamia University.
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
			<div className="flex flex-col gap-5">
				<div className="flex flex-col gap-5">
					<div className="font-semibold">My Hobbies</div>
					<div className="text-sm sm:text-base">
						I love to play football and cricket. I also
					</div>
					<div className="text-sm sm:text-base">
						love to play video games. I also love to watch movies
						and series.
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutIntro;
