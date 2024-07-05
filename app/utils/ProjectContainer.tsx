import React from "react";
import Link from "next/link";
import Image from "next/image";
import recipe from "@/app/assets/heroImage.png";
import password from "@/app/assets/passGen.png";
import meme from "@/app/assets/meme.jpg";
import realEstate from "@/app/assets/RoofScout_Reimagined.jpg";
import style from "@/app/Styles/styles.module.css";
import Smartwatch from "@/app/assets/swatch.jpg"

type Projects = {
  title: string;
  imageURL: any;
  Description: string;
  Motivation: string;
  Stack: Array<string>;
  linkURL: string;
};

const ProjectDisplay = () => {
  const projects: Projects[] = [
    {
      title: "Bluetooth Intrusion Detection",
      imageURL: Smartwatch,
      Description: "AI/ML algorithm to protect against cyber criminals for wearables",
      Motivation: "",
      Stack: [],
      linkURL: "https://github.com/joe-boadi/smartwatch-anomaly-detection",
    },

    {
      title: "Password Generator",
      imageURL: password,
      Description: "A web-app for generating random and strong passwords",
      Motivation: "",
      Stack: [],
      linkURL: "https://password-generator-app-kohl-ten.vercel.app/",
    },

    {
      title: "Recipe Whisperer",
      imageURL: recipe,
      Description: "A recipe hub for delicious delicacies",
      Motivation: "(API/Data Fetching)",
      Stack: [],
      linkURL: "https://github.com/joe-boadi/recipe-web-app.git",
    },

    {
      title: "Real Estate Listing",
      imageURL: realEstate,
      Description: "Browse real estate listings",
      Motivation: "(CRUD, Fullstack development)",
      Stack: [],
      linkURL: "https://real-estate-listing-beta.vercel.app/",
    },

    {
      title: "Meme Generator",
      imageURL: meme,
      Description: "A web-app for generating random and funny memes for laughs",
      Motivation: "",
      Stack: [],
      linkURL: "https://github.com/joe-boadi/meme-generator",
    },
  ];

  return (
    <>
      <h1 id="project" className="text-3xl p-2 text-center mt-10 mb-10">
        Projects
      </h1>
      <div className={`${style.project_container} container relative overflow-hidden bottom-9`}>
        <div className={`${style.projects} flex overflow-x-auto space-x-4 p-4 snap-center snap-x snap-mandatory`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="border container rounded-lg w-72 h-80 p-4 flex flex-col items-center justify-center snap-center hover:bg-base-300"
            >
              <Image
                alt={project.title}
                src={project.imageURL}
                width={150}
                height={150}
                priority={false}
                className="rounded-badge"
              />
              <div className="text-center p-4 text-sm">
                <Link href={project.linkURL} className=" hover:underline hover:text-green-600">
                    <h2 className="text-lg text-green-500 mb-2">{project.title}</h2>
                </Link>
                <p className="italic mt-2">{project.Description}</p>
                <p className="mt-2">{project.Motivation}</p>
                <ol className="list-disc list-inside mt-2">
                  {project.Stack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectDisplay;
