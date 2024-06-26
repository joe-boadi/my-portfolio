import React from "react"

const Introduction = () => {
    return (
        <>
            {/* <h1 className="text-3xl p-2 m-2 text-center"> My Portfolio </h1> */}
            <div className="container flex m-auto p-3" id="portfolio">
                <div className="text-center items-center">
                    <span className="text-2xl mb-2 font-mono">👋 Hello, I am Joe</span> <br />
                    <ol>
                        <li>    
                            A passionate software engineer with nearly a year of professional experience. Armed with a BSc in Computer Science 
                            and Engineering, my focus extends to the dynamic realms of information security and leveraging AI to fortify digital 
                            landscapes.
                        </li>
                        <li>
                            💻 My tech toolkit includes Next.js, Node.js, and Python, and I revel in crafting robust software solutions 
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
