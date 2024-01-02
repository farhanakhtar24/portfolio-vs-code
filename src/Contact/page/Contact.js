import React from "react";
import ContactDiv from "../components/ContactDiv";
import Form from "../components/Form";

const contacts = [
  {
    id: 1,
    name: "leetcode",
    link: "https://leetcode.com/VladimirZelensky/",
    display: "VladimirZelensky",
  },
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
    <div className="flex flex-col gap-5 p-4 font-mono text-lg text-white sm:p-7 lg:grid lg:grid-cols-2">
      <ContactDiv contacts={contacts} />
      {/* <Form /> */}
    </div>
  );
};

export default Contact;
