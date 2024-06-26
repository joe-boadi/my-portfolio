import React from "react";
import Link from "next/link";
import Image from "next/image";
import Recipe from '@/app/assets/images/KBM-cartoon.jpg'

type Projects = {
    title: string;
    imageURL: string;
    Description: string;
    Motivation: string;
    Stack: Array<string>;
    linkURL: string;
}

const projects: Projects[] = [
    { 
        title: "Recipe Whisperer",
        imageURL:" Recipe",
        Description: "A recipe hub for delicious delicacies",
        Motivation: "For the fun of exploring foreign dishes and being adventurous while staying healthy",
        Stack: ["react.js", "tailwind CSS"],
        linkURL: "https://github.com/joe-boadi",
    },

    {
        title: "Password Generator",
        imageURL: "./passGen.png",
        Description: "A web-app for generating random and strong passwords without hustle",
        Motivation: "The hassle of generating a good and strong passwords",
        Stack: ["Next.js", "Pure CSS-5","tailwind CSS"],
        linkURL: "https://github.com/joe-boadi",

    },

    {
        title: "Meme Generator",
        imageURL: "./passGen.png",
        Description: "A web-app for generating random and funny memes for laughs",
        Motivation: "The recent popularity of memes and the satisfaction in communication",
        Stack: ["react.js", "Pure CSS-5","tailwind CSS"],
        linkURL: "https://github.com/joe-boadi",

    },

    {
        title: "Real Estate Listing",
        imageURL: "./passGen.png",
        Description: "A template-app for checking real estate listings",
        Motivation: "The comfort of owning a property in real estate with a few clicks",
        Stack: ["react.js", "Pure CSS-5","tailwind CSS"],
        linkURL: "https://github.com/joe-boadi",

    },
]

const ProjectDisplay = () => {
    return(
            <>
                <h1 className="text-3xl p-2 m-2 text-center mt-10" id="projects">Projects</h1>
                {projects.map((project, index) => {
                        <div className="border items-center justify-center mb-16 w-28 h-24 grid grid-cols-2 md:grid-flow-col text-sm text-left">
                            <div>
                                <div>
                                    <Image
                                        alt="Project Image"
                                        src={project.imageURL}
                                        width={200}
                                        height={150}
                                        priority={false}
                                    />
                                    <div className="items-center justify-center text-center">
                                        <h2 className="underline">{project.title}</h2>
                                        <Link href={project.linkURL}>Visit this link</Link>
                                        <p className="italic">{project.Description}</p>
                                        <p className="">{project.Motivation}</p>
                                        <ol>{project.Stack.map((tech, i) =>(
                                            <li key={i}>{tech}</li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
            </>
    )
}

export default ProjectDisplay