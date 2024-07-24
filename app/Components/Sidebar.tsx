import React from "react"
import Image from "next/image"
import IconLinks from "../utils/Iconslink"
import Link from "next/link"
import Headshot from "@/app/assets/KBM-headshot.jpg"

const Profile = () => {
    return(
        <aside className="sticky top-2 flex flex-col text-base-content text-center items-center justify-center font-mono md:flex-row w-34 h-screen z-5 mt-16 mr-2 mx-28 p-2 bg-base-100">
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