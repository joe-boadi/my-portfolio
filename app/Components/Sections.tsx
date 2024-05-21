import StackIcons from "../utils/Tools";
import Contact from "./Contact";
import Introduction from "./Introduction";

const Section = () =>{
    
    return(
        <>
        {/* Display grid containers for project */}
            <div className="grid justify-center mt-16 m-1 p-2 font-mono mx-auto lg:w-4/5 box-content">
                <Introduction />
                <StackIcons />
                <Contact />
            </div>
        </>
    )
}
export default Section