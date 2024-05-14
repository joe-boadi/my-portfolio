import Link from "next/link"
import { BiLogoTypescript } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
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
];

const StackIcons = () => {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-2 m-0 p-1 justify-center">
            {stackIcons.map((icon, index) => (
                <div key={index} className="m-2 p-1 justify-center items-center h-full w-full">
                    <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16">
                        {icon.icon}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StackIcons;