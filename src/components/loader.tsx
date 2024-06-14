import { AnimatePresence, motion, useAnimate } from "framer-motion"
import { Curl } from "@/components/graphics/decoration"
import { useEffect } from "react"

export default function Loader({ onLoad }: { onLoad: any }) {
    const [scope, animate] = useAnimate()

    const startAnimation = async () => {
        await animate("#its", {
            display: "inline"
        })

        await animate("#its", {
            display: "none"
        })

        await animate("#your", {
            display: "inline"
        })

        await animate("#your", {
            display: "none"
        })

        await animate("#birthday", {
            display: "inline",
            scale: 1.1
        }, {
            type: "spring",
            damping: 50
        })
    }

    useEffect(() => {
        startAnimation().then(() => onLoad())
    }, [])

    return (
        <>
            <motion.div initial={{ height: '100vh' }} exit={{ height: 0 }} transition={{ type: "spring", damping: 20 }} ref={scope} className="fixed top-0 left-0 z-[100] flex w-full justify-center items-center bg-neutral-950 overflow-hidden">
                <div className="relative flex font-branch text-5xl md:text-8xl w-full">
                    <span className="opacity-0">&nbsp;</span>
                    <span className="absolute inset-x-0 flex justify-center"><span id="its" className="hidden">it&apos;s</span></span>
                    <span className="absolute inset-x-0 flex justify-center"><span id="your" className="hidden">your</span></span>
                    <span className="absolute inset-x-0 flex justify-center py-2"><span id="birthday" className="hidden">birthday!</span></span>
                </div>
            </motion.div>
            <motion.div initial={{ height: '100vh' }} exit={{ height: 0 }} transition={{ type: "spring", damping: 20, delay: .1 }} className="fixed top-0 left-0 z-[99] w-full bg-neutral-900">
            </motion.div>
        </>
    )
}