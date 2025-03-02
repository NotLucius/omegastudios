import { testimonials } from "../constants";

export default function Testimonial() {
    function truncateText(text, maxLength = 110) {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + "...";
    }


    
    return (
        <>
            <div className="border-gradient-after my-24 pb-12"></div>
            <div className="container space-y-48">
                <div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <h1 className="text-4xl font-bold text-white">Testimonials</h1>
                    </div>
                    <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-6 py-6 ">
                        {testimonials.map((txt, txtIdx) => (
                            <div>
                                <div key={txtIdx} className="border border-zinc-500/10 hover:border-zinc-500/50 rounded-xl p-6 w-full transition-all duration-200   ">
                                    <p className="text-white opacity-60 text-[16px] pb-6">{truncateText(txt.message)}</p>
                                    <div className="flex gap-4">
                                        <img className="w-10 h-10 rounded-full" src="https://i.imgur.com/OKTPfAw.png" />
                                        <div className="flex flex-col text-sm">
                                            <p className="text-white font-bold">{txt.name}</p>
                                            <p className="text-white opacity-50">Product: {txt.product}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex relative pb-36">
                    <div className="relative border border-zinc-500/20 rounded-xl p-8 w-full">
                        <div className="flex lg:px-8 flex-col justify-center items-center gap-2">
                            <div className="flex w-full flex-col items-center">
                                <div className="flex justify-center items-center gap-2">
                                    <p className="text-center text-white opacity-80 text-[16px] pb-6 max-w-2xl">
                                        Ignite your full potential with Omega Studios. Elevate your skills, amplify your creativity, and shape a limitless future. Join a community of innovators, guided by industry pioneers, and unleash your boundless capabilities. Your journey to excellence starts here. Omega Studios: Where Your Potential Soars.
                                    </p>
                                </div>
                                <div className="flex justify-center items-center gap-2 self-stretch">
                                <a href="https://discord.gg/JPFAzkWDPR" target="_blank" className="mt-6 px-8 py-3 border border-zinc-500/20 hover:border-zinc-500/50 text-zinc-500 hover:text-white flex items-center font-medium rounded-full transition-all duration-all">
                                    <i className="fa-brands fa-discord"></i>
                                    <span className="ml-4">Join our Discord</span>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}