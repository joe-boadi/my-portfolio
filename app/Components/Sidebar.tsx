import Image from "next/image"
import IconLinks from "../utils/Iconslink"

export default function Sidebar() {
    return(
        <div className="left-0 flex flex-col w-1/3 bg-base-100 p-8 text-base-content items-centers justify-center">
            <div className="max-w-md mb-4">
                <div>
                    <div className="avatar rounded-badge">
                        <div className="rounded-badge border-bg-accent m-4 p-2">
                            <Image
                                // className="rounded-sm border-bg-accent m-4 p-2 w-24"
                                src="/images/KBM-headshot.jpg"
                                width={150}
                                height={100}
                                alt="Picture of the author"
                                priority={false}
                            />
                        </div>
                    </div>
                    <div className="items-center justify-center">
                        <h2 className="text-lg font-semibold">Kwadjo Boadi</h2>
                        <h3 className="text-slate-400 text-sm">joe-boadi - he/him</h3>
                        <p className="text-xs justify-between text-wrap">
                            Computer Sci. & Eng. || Technology & Security || Ex-Allied Health
                        </p>
                        <button className="btn btn-outline btn-wide btn-sm text-xs m-2 p-2 rounded-lg">Hire Me</button>
                    </div>
                </div>
                {/*Experience, Location, status & "Hire me" button*/}
                <div className="m-0 p-1 text-sm">
                    <IconLinks />
                </div>
            </div>
        </div>
    )
}