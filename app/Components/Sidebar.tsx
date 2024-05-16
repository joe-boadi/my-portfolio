import Image from "next/image"
import IconLinks from "../utils/Iconslink"

export default function Sidebar() {
    return(
        <aside className="left-0 mt-16 mx-7 p-2 flex grid-cols-2 w-1/5 bg-base-100 text-base-content items-centers justify-center font-mono">
            <div>
                <div>
                    <div className="rounded-full overflow-hidden">
                        <div className="rounded-full m-4 p-2">
                            <Image
                                src="/images/KBM-headshot.jpg"
                                width={150}
                                height={150}
                                alt="Picture of the author"
                                priority={false}
                                className="rounded-full"
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
                <div className="m-0 p-1 text-sm">
                    <IconLinks />
                </div>
            </div>
        </aside>
    )
}