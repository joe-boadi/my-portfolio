import Link from "next/link"
import { BiLogoTypescript } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { FaCss3, FaDiscord, FaGithub, FaHtml5, FaNodeJs, FaPython, FaSlack } from "react-icons/fa";
import { FaGolang, FaTrello } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscodeInsiders } from "react-icons/vsc";

type StackLink = {
    icon: JSX.Element;
    name: string;
}

const stackIcons: StackLink[] = [
    {
        icon: <DiJavascript/>,
        name: "Javascript"
    },
    {
        icon: <IoLogoReact />,
        name: "React"
    },
    {
        icon: <RiNextjsFill />,
        name: "Next.js"
    },
    {
        icon: <BiLogoTypescript />,
        name: "TypeScript"  
    },
    {
        icon: <FaPython />,
        name: "Python"
    },
    {
        icon: <FaTrello />,
        name: "Trello"
    },
    {
        icon: <FaNodeJs />,
        name: "Node.js"
    },
    {
        icon: <FaHtml5 />,
        name: "HTML5"
    },
    {
        icon: <FaCss3 />,
        name: "CSS3"
    },
    {
        icon: <VscVscodeInsiders />,
        name: "VS Code"
    },
    {
        icon: <FaGolang />,
        name: "Golang"
    },
    {
        icon: <FaDiscord />,
        name: "Discord"
    },
    {
        icon: <FaSlack />,
        name: "Slack"
    },
    {
        icon: <FaGithub />,
        name: "Github"
    },
];

const StackIcons = () => {
    return (
        <div className="grid md:grid-cols-2 m-2 p-1 justify-center text-sm">
            {stackIcons.map((icon, index) => (
                <svg key={index} className="m-2 p-1 justify-center items-center text-sm">
                    {icon.icon}
                </svg>
            ))}
        </div>
    )
}

export default StackIcons;