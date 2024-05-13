import Image from "next/image"
import {BsBuildingFill} from "react-icons/bs"
import { GrLocationPin } from "react-icons/gr"
import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri"
import HireMe from "./HireMe"
import IconLinks from "../utils/Iconslink"

export default function Sidebar() {
    return(
        <div className="bg-base-100 p-8 text-base-content">
            {/*TODO*/}
            {/* Profile picture/Hero Image*/}
            <div>
                <Image
                        className="rounded-full border-bg-accent m-4 p-2 w-24"
                        src="/images/KBM-headshot.jpg"
                        width={200}
                        height={200}
                        alt="Picture of the author"
                />
                <h2 className="text-lg font-semibold">Kwadjo Boadi</h2>
                <h3 className="text-slate-400">joe-boadi - he/him</h3>
                <p className="text-sm">
                    Computer Sci. & Eng. || Technology & Security || Ex-Allied Health
                </p>
            </div>
            <button className="btn btn-outline btn-wide glass text-sm m-2 p-2 rounded-lg">Hire Me</button>
            {/*Experience, Location, status & "Hire me" button*/}
            <div className="m-0 p-1 text-sm">
                <IconLinks />
            </div>
        </div>
    )
}