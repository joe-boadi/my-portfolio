import React from "react"

const Introduction = () => {
    return (
        <div className="border rounded-lg mt-7 p-3 text-center items-center transform scale-x-[85%]" id="portfolio">
            <div className="relative font-mono">
                <p className="absolute text-2xl w-full">👋 Hello, I am <span className="text-green-500"> Joe</span></p> <br />
                <br />
                <ol>
                    <li>    
                        A passionate <span className="text-green-500">software engineer</span> with over a year of professional experience.
                    </li>

                    <li>Armed with BSc <span className="text-green-500"> Computer Science and Engineering</span></li>  
                    <li>My focus extends to the dynamic realms of <span className="text-green-500">information security</span>, and leveraging <span className="text-green-500"> AI</span> to fortify digital landscapes.
                    </li>

                    <li>
                        My tech toolkit💻  includes <span className="text-green-500">Next.js</span>, <span className="text-green-500">Node.js</span>, and <span className="text-green-500">Python</span>, and I revel in crafting robust software solutions 
                        that elevate organizations and delight clients.
                    </li>

                    <li> 
                        Beyond the keyboard, I find harmony playing the piano 🎹 and engage in various extracurricular activities that add color 
                        to life.
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Introduction
