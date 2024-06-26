import React from "react";
import ProjectDisplay from "../utils/ProjectContainer";
import StackIcons from "../utils/Tools";
import Contact from "./Contact/Contact";
import Introduction from "./Introduction";

const Section = () =>{
    
    return(
        <>
            <section id="profile w-4/5">
                <div className="container flex md:flex-col ml-0 pl-0 left-0 justify-center mt-16 m-1 lg:mx-3 font-mono">
                    <div className="w-full min-h-screen">
                        <Introduction />
                        <StackIcons />
                        <ProjectDisplay />
                        <Contact />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section