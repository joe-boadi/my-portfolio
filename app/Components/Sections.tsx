import React from "react";
import ProjectDisplay from "../utils/ProjectContainer";
import StackIcons from "../utils/Tools";
import Contact from "./Contact/Contact";
import Introduction from "./Introduction";
import NavLinks from "@/app/Components/NavLinks";
import Sidebar from "@/app/Components/Sidebar";
import Footer from "@/app/Components/Footer";

const Section = () =>{
    
    return(
            <>
                <NavLinks />
                <div className="container flex grid-cols-2 p-1 gap-0">
                    <Sidebar />
                    <section id="profile" className="container text-sm items-center justify-center">
                        <div className="flex flex-col justify-center font-mono text-sm">
                            <div className="w-4/5">
                                <Introduction />
                                <StackIcons />
                                <ProjectDisplay />
                                <Contact />
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </>
    )
}

export default Section