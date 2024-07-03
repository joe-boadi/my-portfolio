import React from "react";
import ProjectDisplay from "../utils/ProjectContainer";
import StackIcons from "../utils/Tools";
import Contact from "./Contact/Contact";
import Introduction from "./Introduction";

const Section = () =>{
    
    return(
            <section id="profile" className="w-4/5 p-9 m-3 text-sm">
                <div className="container flex md:flex-col justify-center mt-16 font-mono text-sm">
                    <div className="min-h-screen">
                        <Introduction />
                        <StackIcons />
                        <ProjectDisplay />
                        <Contact />
                    </div>
                </div>
            </section>
    )
}

export default Section