export default function Topnav(){
    return (
        <div>
            <nav className="bg-base-200 text-sm p-2 m-0">
            <h1 className="text-lg font-extrabold">joe-boadi</h1>
            {/*TODO*/}
            {/*Portfolio Logo */}
                <div className="m-2 p-1 justify-center">
                    <a className="m-2" href="/" target="" rel="noopener noreferrer">Home</a>
                    <a className="m-2" href="/" target="" rel="noopener noreferrer">Profile</a>
                    <a className="m-2" href="/" target="" rel="noopener noreferrer">Project</a>
                    <a className="m-2" href="/" target="" rel="noopener noreferrer">Contact</a>
                </div>
           </nav>
        </div>
    )
}