import { ButterflyTop, Curl, Leaf, Star } from "@/components/graphics/decoration"
import { Heart } from "@/components/icons/outline"
import HorizontalRunningText from "@/components/running-text/horizontal"
import VerticalRunningText from "@/components/running-text/vertical"
import MainLayout from "@/layouts/main"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
    return (
        <MainLayout title="Happy Valentine’s Day" overrideTitle={false}>
            <div className="pointer-events-none select-none">
                {/* <div className="absolute inset-0 flex items-end justify-end p-16">
                    Download
                </div> */}
                {/* .absolute.inset-0 */}
                <div className="overflow-hidden absolute inset-0 z-50 flex m-2 opacity-20">
                    <div className="mx-6 overflow-hidden flex flex-col justify-between h-full">
                        <HorizontalRunningText direction={-1}><span className="uppercase font-semibold tracking-widest">HPPY</span></HorizontalRunningText>
                        <HorizontalRunningText><span className="uppercase font-semibold tracking-widest">HPPY</span></HorizontalRunningText>
                    </div>
                </div>
                <div className="overflow-hidden absolute inset-0 z-50 flex m-2 opacity-20">
                    <div className="my-6 overflow-hidden flex justify-between w-full">
                        <VerticalRunningText><span className="uppercase font-semibold tracking-widest">HPPY</span></VerticalRunningText>
                        <VerticalRunningText direction={-1}><span className="uppercase font-semibold tracking-widest">HPPY</span></VerticalRunningText>
                    </div>
                </div>
                <div className="absolute inset-0 z-50 m-2 opacity-20 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <Heart className="w-5 h-5 -rotate-[45deg]" strokeWidth={2} />
                        <Heart className="w-5 h-5 rotate-[45deg]" strokeWidth={2} />
                    </div>
                    <div className="flex justify-between">
                        <Heart className="w-5 h-5 -rotate-[135deg]" strokeWidth={2} />
                        <Heart className="w-5 h-5 rotate-[135deg]" strokeWidth={2} />
                    </div>
                </div>
            </div>
            <div className="p-10 min-h-screen flex">
                <div className="flex items-center justify-center flex-grow bg-xoxo">
                    <div>
                        <div>
                            {/* <div className="relative text-3xl md:text-5xl font-zighead w-fit">
                                <span>It’s</span>
                                <motion.span animate={{ rotate: 10 }} transition={{ repeat: Infinity, repeatType: 'mirror', duration: 1 }} className="absolute -right-10 md:-right-12"><Star className="w-8 h-8 md:w-10 md:h-10" /></motion.span>
                            </div> */}
                            <div className="relative flex font-zighead text-5xl md:text-8xl w-fit">
                                <span>It’s Your</span>
                                <motion.span animate={{ y: 5 }} transition={{ repeat: Infinity, repeatType: 'mirror', duration: 1.5 }} className="absolute -left-3 -bottom-3 md:-left-1 md:-bottom-1"><Curl className="w-14 h-14 md:w-16 md:h-16" /></motion.span>
                            </div>
                            <div className="relative p-8 -mt-14 md:-mt-20 -mr-24 text-right text-transparent font-script text-7xl md:text-8xl bg-gradient-to-tl from-blue-300 to-pink-300 bg-clip-text">
                                <motion.span animate={{ y: 30 }} transition={{ repeat: Infinity }}>Birthday</motion.span>
                                <motion.span animate={{ y: 5 }} transition={{ repeat: Infinity, repeatType: 'mirror', duration: 1 }} className="absolute right-5 bottom-12 md:bottom-16"><Leaf className="w-5 h-5 md:w-7 md:h-7" /></motion.span>
                            </div>
                        </div>
                        {/* <div className="flex items-center justify-between">
                            <Link href="/playground">Playground</Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}