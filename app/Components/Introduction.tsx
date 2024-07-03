import React from "react"

const Introduction = () => {
    return (
        <>
            {/* <h1 className="text-3xl p-2 m-2 text-center"> My Portfolio </h1> */}
            <div className="container flex m-auto p-3" id="portfolio">
                <div className="text-center items-center">
                    <span className="text-2xl mb-2 font-mono">👋 Hello, I am <span className="text-green-500"> Joe</span></span> <br />
                    <ol>
                        <li>    
                            A passionate <span className="text-green-500">software engineer</span> with over a year of professional experience. Armed with BSc 
                            <span className="text-green-500"> Computer Science and Engineering</span>   
                            , my focus extends to the dynamic realms of <span className="text-green-500">information security</span> and leveraging <span className="text-green-500"> AI</span> to fortify digital 
                            landscapes.
                        </li>
                        <li>
                            💻 My tech toolkit includes <span className="text-green-500">Next.js</span> , <span className="text-green-500">Node.js</span>, and <span className="text-green-500">Python</span>, and I revel in crafting robust software solutions 
                            that elevate organizations and delight clients.
                        </li>
                        <li> 
                            🎹 Beyond the keyboard, I find harmony playing the piano and engage in various extracurricular activities that add color 
                            to life.
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Introduction
