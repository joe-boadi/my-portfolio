import Link from "next/link";
import Image from "next/image";

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
        imageURL: "https://",
        Description: "A recipe hub for delicious delicacies",
        Motivation: "For the fun of exploring foreign dishes and being adventurous while staying healthy",
        Stack: ["react.js", "tailwind CSS"],
        linkURL: "https://github.com/joe-boadi",
    },


    {
        title: "Password Generator App",
        imageURL: "./passGen.png",
        Description: "A web-app for generating random and strong passwords without hustle",
        Motivation: "The hassle of generating a good and strong passwords",
        Stack: ["Next.js", "tailwind CSS"],
        linkURL: "https://github.com/joe-boadi",

    },
]

const ProjectDescription = () => {
    return(
            <>
                <h1 className="text-3xl p-2 m-2 text-center" id="projects">Projects</h1>
                {projects.map((project, index) => {
                    <div key={index} className="border grid grid-cols-2 md:grid-flow-col items-center justify-center text-sm text-left">
                        <div>
                            <Image
                                alt="Project Image"
                                src={project.imageURL}
                                width={200}
                                height={200}
                                priority={false}
                            />
                        <div>
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
                })}
            </>
    )
}

export default ProjectDescription