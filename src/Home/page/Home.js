import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Button from "../components/Button";
import image from "../Assets/IMG_20210304_110737_479.jpg";

const Home = () => {
	return (
		<div className="flex h-full w-full justify-center items-center text-Pages-HomePage-text p-4 sm:p-7 text-white">
			{/* img in background  */}
			<div className="flex flex-col-reverse gap-6 sm:grid sm:grid-cols-2 justify-center w-full h-full sm:bg-i-code-websites bg-left bg-cover bg-no-repeat">
				<div className="flex items-center justify-center sm:justify-start">
					<div>
						<div className="text-2xl sm:text-5xl font-semibold mb-5 truncate">
							Mohd Farhan Akhtar
						</div>
						<TypeAnimation
							cursor={true}
							sequence={["MERN Stack Web Developer", 1000]}
							wrapper="h2"
							className="text-xl sm:text-2xl font-extralight mb-12"
						/>
						<div className="flex flex-col sm:flex-row gap-1 sm:gap-5 items-center">
							<Link to="/projects">
								<Button>View Work</Button>
							</Link>
							<Link to="/contact">
								<Button>Contact Me</Button>
							</Link>
						</div>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<img
						src={image}
						alt="profile-img"
						className="w-1/2 sm:w-2/3 rounded-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
