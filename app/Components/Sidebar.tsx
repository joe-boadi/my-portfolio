import React from "react"
import Image from "next/image"
import IconLinks from "../utils/Iconslink"
import Link from "next/link"
import Headshot from "@/app/assets/KBM-headshot.jpg"

const Profile = () => {
    return(
        <aside className="flex flex-col md:flex-row sticky top-24 h-screen z-5 content mt-16 mr-0 pr-0 w-1/5 mx-28 p-2 bg-base-100 text-base-content text-center items-centers justify-center font-mono">
            <div>
                <div>
                    <div>
                        <div className="m-4 p-2 object-cover">
                            <Image
                                src={Headshot}
                                width={200}
                                height={200}
                                alt="Picture of the author"
                                priority={false}
                                className="rounded-lg  justify-center items-center"
                            />
                        </div>
                    </div>
                    <div className="items-center justify-center text-sm">
                        <h2 className="text-lg font-semibold">Kwadjo Boadi</h2>
                        <h3 className="text-slate-400 text-sm">joe-boadi - he/him</h3>
                        <p className="text-xs justify-between text-wrap">
                            Computer Sci. & Eng. || Technology & Security || Ex-Allied Health
                        </p>
                        <Link href="#contact"><button className="btn btn-outline btn-wide btn-sm text-xs m-2 p-2 rounded-lg hover:bg-green-400"> Hire Me</button></Link>
                    </div>
                </div>
                <div className="m-0 p-1 text-sm text-left">
                    <IconLinks />
                </div>
            </div>
        </aside>
    )
}

export default Profile