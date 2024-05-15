import { FaTrello } from "react-icons/fa";
import StackIcons from "../utils/StackDisplay";

export default function MainBody() {
    
    return(
        <>
        {/* Display grid containers for project */}
           <div className="w-2/3 right-0 m-1 p-2">
                <section>
                    <h1 className="text-3xl p-2 m-2"> My Portfolio </h1>
                    <div className="flex outline rounded-lg m-4 p-3">
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

                <section className="m-4 p-3">
                    <div className="text-3xl p-4 m-2"> <h2>Tools I use</h2> </div>
                    <div className="outline rounded-lg p-2 m-1">
                        <div className="">
                            <div className="flex grid-cols-4 justify-center items-center gap-4 w-full h-full">
                                <StackIcons />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}