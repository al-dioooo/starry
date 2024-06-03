// Framer Motion
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion"
import { wrap } from "@motionone/utils"

import { ReactNode, useRef } from "react"
import { Heart } from "@/components/icons/solid"

type HorizontalRunningTextProps = {
    children: ReactNode,
    direction?: number
}

export default function HorizontalRunningText({ children, direction = 1 }: HorizontalRunningTextProps) {
    const baseVelocity = .3
    const baseX = useMotionValue(0)

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -2, v)}%`)

    useAnimationFrame((t, delta) => {
        let moveBy = direction * baseVelocity * (delta / 1000)

        moveBy += moveBy

        baseX.set(baseX.get() + moveBy)
    })

    /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -2% - this 2% is derived from the fact
   * we have fifty children (100% / 50). This would also want deriving from the
   * dynamically generated number of children.
   */
    return (
        <div className="flex flex-nowrap whitespace-nowrap">
            <motion.div className="flex items-center flex-nowrap whitespace-nowrap" style={{ x }}>
                {[...Array(50)].map(() => (
                    <p key={null} className="text-sm px-2 inline-flex items-center space-x-2" style={{ transform: `scale(${direction})` }}>
                        {/* <span>
                            <Heart className="w-4 h-4" strokeWidth={1.5} />
                        </span> */}
                        {children}
                    </p>
                ))}
            </motion.div>
        </div>
    )
}