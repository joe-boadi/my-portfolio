import React from "react";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiJava, DiJavascript, DiMongodb } from "react-icons/di";
import { FaCss3, FaDiscord, FaGithub, FaHtml5, FaNodeJs, FaPython, FaSlack } from "react-icons/fa";
import { FaGolang, FaTrello } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscodeInsiders } from "react-icons/vsc";

type StackLink = {
    icon: JSX.Element & { className?: "w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" };
    name: string;
}

const stackIcons: StackLink[] = [
    {
        icon: <DiJavascript className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Javascript"
    },
    {
        icon: <IoLogoReact className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "React"
    },
    {
        icon: <RiNextjsFill className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Next.js"
    },
    {
        icon: <BiLogoTypescript className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "TypeScript"  
    },
    {
        icon: <FaPython className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Python"
    },
    {
        icon: <FaTrello className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Trello"
    },
    {
        icon: <FaNodeJs className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Node.js"
    },
    {
        icon: <FaHtml5 className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "HTML5"
    },
    {
        icon: <FaCss3 className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "CSS3"
    },
    {
        icon: <VscVscodeInsiders className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "VS Code"
    },
    {
        icon: <FaGolang className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Golang"
    },
    {
        icon: <FaDiscord className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Discord"
    },
    {
        icon: <FaSlack className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Slack"
    },
    {
        icon: <FaGithub className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Github"
    },

    {
        icon: <BiLogoPostgresql className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Postgresql"
    },

    {
        icon: <DiMongodb className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "MongoDB"
    },

    {
        icon: <DiJava className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Java"
    },
];

const StackIcons = () => {
    return (
        <>
            <h1 className="text-3xl p-2 text-center mb-0 mt-10">Tools</h1>
            <div className="flex justify-center md:grid-cols-3 mt-0">
                <div className="grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-4 mt-7 lg:w-4/5 md:w-4/5 border rounded-lg m-4 p-5">
                    {stackIcons.map((icon, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 cursor-pointer hover:text-green-400 ">
                                {icon.icon}
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </>
    )
}

export default StackIcons;