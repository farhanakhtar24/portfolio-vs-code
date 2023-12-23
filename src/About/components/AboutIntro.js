import React from "react";

const PersonalInfo = [
  {
    id: 1,
    title: "AGE",
    value: "20",
  },
  {
    id: 2,
    title: "EMAIL",
    value: "akhtar.farhan779@gmail.com",
  },
  {
    id: 3,
    title: "PHONE",
    value: "+91 955-757-8576",
  },
  {
    id: 4,
    title: "ADDRESS",
    value: "110025, New Delhi, India",
  },
];

const AboutIntro = () => {
  return (
    <div className="flex flex-col gap-10 rounded-3xl bg-page-navbar-blue p-5 shadow-2xl sm:grid sm:grid-cols-5">
      <div className="col-span-3 flex flex-col gap-5">
        <div className="font-semibold">Hello, I'm Farhan Akhtar</div>
        <div className="text-sm sm:text-base">
          I'm a final year Electrical Engineering student at Jamia Millia
          Islamia University.
        </div>
        <div className="text-sm sm:text-base">
          I am deeply passionate about full stack web development and constantly
          strive to enhance my skills in this field. I thoroughly enjoy learning
          new technologies and applying them to build innovative projects. With
          a strong foundation in web development, I have gained valuable
          experience in creating web applications. As a self-taught developer, I
          possess extensive knowledge of various web development technologies
          and techniques. I am dedicated to writing clean and efficient code,
          and I am always eager to take on new challenges and contribute to the
          world of web development.
        </div>
      </div>
      <ul className="col-span-2 flex flex-col gap-4">
        {PersonalInfo.map((info) => (
          <li key={info.id} className="grid grid-cols-5">
            <span className="col-span-1 font-semibold">{info.title}</span>
            <span className="col-span-4 w-full truncate">
              :&nbsp;{info.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutIntro;
