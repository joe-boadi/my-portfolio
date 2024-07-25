import React from "react";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiJava, DiJavascript, DiMongodb } from "react-icons/di";
import { FaCss3, FaDiscord, FaGithub, FaHtml5, FaNodeJs, FaPython, FaSlack } from "react-icons/fa";
import { FaGolang, FaTrello } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscodeInsiders } from "react-icons/vsc";

type StackLink = {
    id: number,
    icon: JSX.Element & { className?: "w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" };
    name: string;
}

const stackIcons: StackLink[] = [
    {
        id: 1,
        icon: <DiJavascript className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Javascript"
    },
    {
        id: 2,
        icon: <IoLogoReact className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "React"
    },
    {
        id: 3,
        icon: <RiNextjsFill className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Next.js"
    },
    {
        id: 4,
        icon: <BiLogoTypescript className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "TypeScript"  
    },
    {
        id: 5,
        icon: <FaPython className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Python"
    },
    {
        id: 6,
        icon: <FaTrello className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Trello"
    },
    {
        id: 7,
        icon: <FaNodeJs className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Node.js"
    },
    {
        id: 8,
        icon: <FaHtml5 className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "HTML5"
    },
    {
        id: 9,
        icon: <FaCss3 className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "CSS3"
    },
    {
        id: 10,
        icon: <VscVscodeInsiders className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "VS Code"
    },
    {
        id: 11,
        icon: <FaGolang className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Golang"
    },
    {
        id: 12,
        icon: <FaDiscord className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Discord"
    },
    {
        id: 13,
        icon: <FaSlack className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Slack"
    },
    {
        id: 14,
        icon: <FaGithub className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Github"
    },
    {
        id: 15,
        icon: <BiLogoPostgresql className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Postgresql"
    },
    {
        id: 16,
        icon: <DiMongodb className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "MongoDB"
    },
    {
        id: 17,
        icon: <DiJava className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16" />,
        name: "Java"
    },
];

const StackIcons = () => {
    return (
        <>
            <h1 className="text-3xl p-2 text-center mb-3 mt-10">Tools</h1>
            <div className="flex justify-center md:grid-cols-3 w-full">
                <div className="grid lg:grid-cols-7 md:grid-cols-3 sm:grid-cols-4 lg:w-4/5 md:w-4/5 border rounded-lg p-5 hover:bg-base-300">
                    {stackIcons.map((icon, ) => (
                        <div key={icon.id} className="flex justify-center items-center">
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