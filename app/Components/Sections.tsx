import { FaTrello } from "react-icons/fa";
import StackIcons from "../utils/StackDisplay";

export default function MainBody() {
    
    return(
        <>
        {/* Display grid containers for project */}
           <div className="flex justify-center m-1 p-2 font-mono mx-auto lg:w-4/5 md:w-4/5 ">
                <section>
                    <h1 className="text-3xl p-2 m-2 text-center"> My Portfolio </h1>
                    <div className="flex border rounded-lg m-4 p-3">
                        <p>
                            <span className="font-extrabold text-2xl">👋 Hello, I am Joe</span> <br />
                            A passionate software engineer with nearly a year of professional experience. Armed with a BSc in Computer Science 
                            and Engineering, my focus extends to the dynamic realms of information security and leveraging AI to fortify digital 
                            landscapes.

                            💻 My tech toolkit includes Next.js, Node.js, and Python, and I revel in crafting robust software solutions 
                            that elevate organizations and delight clients.
                        
                            🎧 When I am not immersed in code, you will find me immersed in podcasts or buried in the pages of a compelling 
                            tech book, staying ahead of the curve on the latest in technology and trends. I am an avid contributor to the software 
                            engineering community, always eager to share knowledge and insights.

                            🎹 Beyond the keyboard, I find harmony playing the piano and engage in various extracurricular activities that add color 
                            to life.
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}