import React from "react"
import { projects } from "../../constants"
import Link from "next/link"

function page() {
    return (
        <>
            <div className="w-full min-h-[15rem] mt-6 flex items-center">
                <div className="w-full flex justify-between items-center container">
                    <div className="text-center flex flex-col items-center justify-center h-full w-full">
                        <div className="text-center text-md font-medium leading-snug opacity-50 bg-white/20 px-3 py-1 rounded-lg">
                            <p className="text-white">what we do?</p>
                        </div>
                        <h1 className="text-6xl font-bold text-white">Our Current Projects</h1>
                    </div>
                </div>
            </div>
            <div className="border-gradient-after"></div>
            <div className="relative container grid gap-24 mt-36">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-300">For Sale</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {projects.map((pro, proIdx) => (
                            <Link href={pro.link} key={proIdx} target="_blank">
                                <div className="border border-zinc-500/30 hover:border-zinc-500/40 rounded-xl h-full !p-[1px] transition-all duration-200 cursor-pointer">
                                    <div className="flex flex-col gap-2 p-6">
                                        {/* <img src="https://cdn.voiddevs.co/ZNLYZZv/20cb5ebbe445.png" className="z-[1] w-full aspect-video rounded-xl object-cover mb-2" /> */}
                                        <h1 className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-300">{pro.product}</h1>
                                        <p className="text-sm font-medium text-gray-500 max-w-xl line-clamp-4">{[pro.message]}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default page