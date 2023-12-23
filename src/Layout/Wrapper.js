import React from "react";
import { motion } from "framer-motion";
import IconBar from "./IconBar";
import Navbar from "./Navbar";
import PageNavbar from "./PageNavbar";
import SideBar from "./SideBar";
import TaskBar from "./TaskBar";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { useLocation } from "react-router-dom";

const pages = [
  {
    id: 1,
    link: "/home",
    name: "home.jsx",
    icon: <FaReact className="text-[#00D8FF]" />,
  },
  {
    id: 2,
    link: "/about",
    name: "about.html",
    icon: <AiFillHtml5 className="text-[#F1662A]" />,
  },
  {
    id: 3,
    link: "/projects",
    name: "projects.js",
    icon: <SiJavascript className="text-[#F5DE19]" />,
  },
  {
    id: 4,
    link: "/github",
    name: "github.md",
    icon: <FaGithub className="text-[#fff]" />,
  },
  {
    id: 5,
    link: "/contact",
    name: "contact.css",
    icon: <DiCss3Full className="text-[#33A9DC]" />,
  },
];

const Wrapper = (props) => {
  const { pathname } = useLocation();
  return (
    <div className="flex h-screen w-screen flex-col overflow-auto">
      <Navbar />
      <div className="flex h-full w-full overflow-hidden">
        <IconBar />
        <SideBar />
        <div className="flex h-full w-full flex-col overflow-hidden border-l border-l-black bg-main-pages-blue">
          <PageNavbar pages={pages} />
          <motion.div
            key={pathname ? pathname : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full overflow-auto font-mono"
          >
            {props.children}
          </motion.div>
        </div>
      </div>
      <TaskBar />
    </div>
  );
};

export default Wrapper;
