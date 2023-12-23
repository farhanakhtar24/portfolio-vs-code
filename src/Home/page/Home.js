import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Button from "../components/Button";
import image from "../Assets/IMG_20210304_110737_479.jpg";

const Home = () => {
  return (
    <div className="text-Pages-HomePage-text flex h-full w-full items-center justify-center p-4 text-white sm:p-7">
      {/* img in background  */}
      <div className="flex h-full w-full flex-col-reverse justify-center gap-6 bg-cover bg-left bg-no-repeat sm:grid sm:grid-cols-2 sm:bg-i-code-websites">
        <div className="flex items-center justify-center sm:justify-start">
          <div className="flex flex-col items-center sm:block">
            <div className="mb-2 truncate text-3xl font-semibold sm:mb-5 sm:text-5xl">
              Mohd Farhan Akhtar
            </div>
            <TypeAnimation
              cursor={true}
              sequence={["MERN Stack Web Developer", 2000]}
              wrapper="h2"
              className="mb-5 text-xl font-extralight sm:mb-12 sm:text-2xl"
            />
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-5">
              <Link to="/projects">
                <Button>View Work</Button>
              </Link>
              <Link to="/contact">
                <Button>Contact Me</Button>
              </Link>
              <Link to="/cv">
                <Button>View CV</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={image}
            alt="profile-img"
            className="w-1/2 rounded-full ring ring-yellow-200 ring-offset-2 ring-offset-slate-50 sm:w-2/3 dark:ring-offset-slate-900"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
