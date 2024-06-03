// Framer Motion
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion"
import { wrap } from "@motionone/utils"

import { ReactNode, useRef } from "react"
import { Heart } from "@/components/icons/solid"

type VerticalRunningTextProps = {
    children: ReactNode,
    direction?: number
}

export default function VerticalRunningText({ children, direction = 1 }: VerticalRunningTextProps) {
    const baseVelocity = 1
    const baseY = useMotionValue(0)

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const y = useTransform(baseY, (v) => `${wrap(-21, -5, v)}%`)

    useAnimationFrame((t, delta) => {
        let moveBy = direction * baseVelocity * (delta / 1000)

        moveBy += moveBy

        baseY.set(baseY.get() + moveBy)
    })

    /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -5% - this 5% is derived from the fact
   * we have twenty children (100% / 20). This would also want deriving from the
   * dynamically generated number of children.
   */
    return (
        <div className="flex flex-nowrap whitespace-nowrap">
            <motion.div className="flex flex-col items-center flex-nowrap whitespace-nowrap" style={{ y }}>
                {[...Array(20)].map(() => (
                    <p key={null} className="text-sm py-2 inline-flex items-center space-y-2" style={{ writingMode: 'vertical-lr', transform: `scale(${direction})` }}>
                        {/* <span>
                            <Heart className="w-4 h-4" strokeWidth={1.5} />
                        </span> */}
                        {children}
                    </p>
                ))}
            </motion.div>
        </div>
    )

    return (
        <div className="absolute inset-0 z-50 pointer-events-none"></div>
    )
}