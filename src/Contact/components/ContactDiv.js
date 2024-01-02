import React from "react";

const ContactDiv = ({ contacts }) => {
  return (
    <div className="text-sm sm:text-xl ">
      <h1 className="pb-4 font-mono text-xl font-semibold sm:text-2xl">
        Reach Out Via Socials
      </h1>
      <ul>
        <li>
          <span className="text-gray-500">1&nbsp;&nbsp;</span>
          <span className="text-gray-500">.socials</span>
          &nbsp;{`{`}
        </li>
        {contacts.map((contact, idx) => {
          return (
            <li>
              <span className="text-gray-500">{idx + 2}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;{contact.name}&nbsp;:&nbsp;
              <a
                href={contact.link}
                target="_blank"
                className="text-gray-500 hover:text-white hover:underline"
                rel="noreferrer"
              >
                {contact.display};
              </a>
            </li>
          );
        })}
        <li>
          <span className="text-gray-500">8</span>
          &nbsp;&nbsp;{"}"}
        </li>
      </ul>
    </div>
  );
};

export default ContactDiv;
