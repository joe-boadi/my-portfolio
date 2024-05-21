import ProjectDescription from "../utils/ProjectContainer";
import StackIcons from "../utils/Tools";
import Contact from "./Contact";
import Introduction from "./Introduction";

const Section = () =>{
    
    return(
        <>
            <section id="profile w-4/5">
                <div className="ml-0 pl-0 left-0 justify-center mt-16 m-1 lg:mx-3 font-mono object-fill">
                    <div>
                        <Introduction />
                        <StackIcons />
                        <ProjectDescription />
                        <Contact />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Section