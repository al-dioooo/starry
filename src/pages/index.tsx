import { ButterflyTop, Curl, Leaf, Star } from "@/components/graphics/decoration"
import LineInMotionGraphics from "@/components/graphics/line-in-motion"
import { Heart } from "@/components/icons/outline"
import Loader from "@/components/loader"
import HorizontalRunningText from "@/components/running-text/horizontal"
import VerticalRunningText from "@/components/running-text/vertical"
import { getBoundingBox } from "@/helpers/clip-path"
import MainLayout from "@/layouts/main"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const colors = [
    {
        code: "1",
        background: "from-pink-500 to-red-500",
        src: "/img/1.jpeg",
        shadow: "from-pink-500/50 to-red-500/50"
    },
    {
        code: "2",
        background: "from-pink-500 to-blue-500",
        src: "/img/2.jpeg",
        shadow: "from-pink-500/50 to-blue-500/50"
    },
    {
        code: "3",
        background: "from-yellow-500 to-white",
        src: "/img/3.jpeg",
        shadow: "from-yellow-500/50 to-white/50"
    }
]

export default function Home() {
    // const polaroid = useRef(null)
    const blob = useRef(null)
    const heroImage = useRef()

    const [color, setColor] = useState(colors.find((row) => row.code === '1'))
    const [backgroundWidth, setBackgroundWidth] = useState(0)
    const [backgroundHeight, setBackgroundHeight] = useState(0)

    const [imageBackground, setImageBackground] = useState('/img/1.jpeg')

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // getBoundingBox(polaroid)
        getBoundingBox(blob)

        const setBackgroundSize = () => {
            // @ts-ignore
            setBackgroundWidth(heroImage.current.offsetWidth)
            // @ts-ignore
            setBackgroundHeight(heroImage.current.offsetHeight)
        }

        setBackgroundSize()

        window.addEventListener("resize", setBackgroundSize)

        return () => window.removeEventListener("resize", setBackgroundSize)
    }, [])

    useEffect(() => {
        const colorData = colors.find((row) => row.code === color?.code)

        // @ts-ignore
        setImageBackground(colorData.src)
    }, [color])

    const onLoad = () => {
        setIsLoaded(true)
    }

    return (
        <MainLayout title="Happy Birthday Agria!" overrideTitle={false}>
            <AnimatePresence mode="wait">
                {!isLoaded && (
                    <Loader onLoad={onLoad} />
                )}
            </AnimatePresence>
            <div className="pointer-events-none select-none">
                <div className="overflow-hidden absolute inset-0 z-50 flex my-2 opacity-20">
                    <div className="overflow-hidden flex flex-col justify-between h-full">
                        <HorizontalRunningText direction={-1}><span className="uppercase font-semibold tracking-widest">Happy Birthday Agriananda</span></HorizontalRunningText>
                        <HorizontalRunningText><span className="uppercase font-semibold tracking-widest">Happy Birthday Agriananda</span></HorizontalRunningText>
                    </div>
                </div>
                {/* <div className="overflow-hidden absolute inset-0 z-50 flex m-2 opacity-20">
                    <div className="my-6 overflow-hidden flex justify-between w-full">
                        <VerticalRunningText><span className="uppercase font-semibold tracking-widest">Happy Birthday Agriananda</span></VerticalRunningText>
                        <VerticalRunningText direction={-1}><span className="uppercase font-semibold tracking-widest">Happy Birthday Agriananda</span></VerticalRunningText>
                    </div>
                </div> */}
                {/* <div className="absolute inset-0 z-50 m-2 opacity-20 flex flex-col justify-between">
                    <div className="flex justify-between">
                        <Heart className="w-5 h-5 -rotate-[45deg]" strokeWidth={2} />
                        <Heart className="w-5 h-5 rotate-[45deg]" strokeWidth={2} />
                    </div>
                    <div className="flex justify-between">
                        <Heart className="w-5 h-5 -rotate-[135deg]" strokeWidth={2} />
                        <Heart className="w-5 h-5 rotate-[135deg]" strokeWidth={2} />
                    </div>
                </div> */}
            </div>
            <div className="absolute inset-0 pointer-events-none">
                <div className="max-h-screen w-full overflow-hidden">
                    <LineInMotionGraphics className="md:w-full w-auto h-screen md:h-full text-neutral-900/50" />
                </div>
            </div>
            <div className="relative flex flex-col-reverse justify-end h-screen p-0 overflow-hidden md:flex-row">
                <div className="relative flex flex-col items-center justify-end h-full px-6 pb-6 md:justify-start md:px-12 md:pb-0 md:pt-32 md:w-1/2">
                    <div className="relative flex flex-col w-full xl:py-8">
                        {/* <div className="absolute top-2 md:top-10 xl:top-20 right-28 md:right-52 xl:right-64">
                            <div className="relative">
                                <p className="px-3 py-1 font-semibold tracking-widest uppercase rounded-full text-xxs xl:text-xs bg-stone-100">Fifteenth</p>
                                <svg className="absolute -top-5 -right-5 text-neutral-400" width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.96602 7.99777C2.30848 10.6215 1.72353 13.252 1.13696 15.8916M24.1359 1.79187C18.2414 7.05031 12.7079 12.7803 7.29796 18.5276M25.0998 20.7724C24.0305 20.8696 22.8412 21.3515 21.8082 21.5912C18.4208 22.3772 15.1046 23.2693 11.7687 24.2533" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </div>
                        </div> */}
                        <h1 className="text-[4.5rem] md:text-[8rem] font-branch text-white">
                            it&apos;s agria&apos;s
                        </h1>
                        <h3 className={`${color?.background} -mt-16 md:-mt-20 xl:-mt-32 text-right bg-gradient-to-br bg-clip-text text-transparent text-[4rem] md:text-[6rem] xl:text-[12rem] font-script`}>
                            Day!
                        </h3>
                    </div>
                    <div className="w-full md:mt-0 xl:mt-8">
                        <div className="flex items-center justify-center space-x-8 md:space-x-4 md:justify-start">
                            {colors.map((row) => (
                                <button onClick={() => setColor(row)} key={row.code} className={`${row.background} ${color?.code === row.code ? "ring-1 ring-neutral-500 ring-offset-4" : "ring-0 ring-offset-0"} ring-offset-black bg-gradient-to-br hover:active:scale-95 transition duration-500 ease-in-out relative w-10 h-10 rounded-full`}>
                                    {/* <AnimatePresence>
                                        {color === row.code && (
                                            <motion.div transition={{ type: "tween", ease: "easeInOut" }} initial={{ y: -5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 5, opacity: 0 }} className="absolute text-xs -inset-x-8 -bottom-8 text-stone-600">{row.name}</motion.div>
                                        )}
                                    </AnimatePresence> */}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* <div className="absolute top-0 left-0 z-50 pointer-events-none">
                        <svg width={0} height={0}>
                            <defs>
                                <clipPath id="polaroidFrame" clipPathUnits="objectBoundingBox">
                                    <path ref={polaroid} fill-rule="evenodd" clip-rule="evenodd" d="M21.6 0C9.67065 0 0 9.67065 0 21.6V338.4C0 350.329 9.67065 360 21.6 360H266.4C278.329 360 288 350.329 288 338.4V21.6C288 9.67065 278.329 0 266.4 0H21.6ZM28.8 14.4C20.8471 14.4 14.4 20.8471 14.4 28.8V259.2C14.4 267.153 20.8471 273.6 28.8 273.6H259.2C267.153 273.6 273.6 267.153 273.6 259.2V28.8C273.6 20.8471 267.153 14.4 259.2 14.4H28.8Z" fill="currentColor" />
                                </clipPath>
                            </defs>
                        </svg>
                        <motion.div initial={{ rotate: -16 }} animate={{ rotate: -12 }} transition={{ type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 2 }} className="w-36 md:w-64 xl:w-72 ring ring-stone-200 ring-opacity-25 ring-inset rounded-md md:rounded-[22px] aspect-[4/5] bg-stone-300 bg-opacity-25 backdrop-blur-sm" style={{ clipPath: "url(#polaroidFrame)" }}></motion.div>
                    </div> */}
                    <div className="flex items-center w-full mt-16 mb-16 space-x-8 md:mb-0">
                        {/* <Link href="/playground" className="flex items-center py-2 pl-6 pr-2 space-x-4 text-white transition duration-500 rounded-full hover:active:scale-90 group md:text-sm xl:text-base bg-stone-600">
                            <span>Playground</span>
                            <span className="flex items-center justify-center p-2 transition duration-500 border rounded-full group-hover:scale-110 border-stone-400">
                                <CameraHeart className="w-4 h-4" stroke={1.5} />
                            </span>
                        </Link> */}
                        {/* <button onClick={downloadCard} className="flex items-center space-x-4 transition duration-500 hover:active:scale-90 group md:text-sm xl:text-base">
                            <span>Birthday Card</span>
                            <span className="flex items-center justify-center p-2 transition duration-500 border rounded-full group-hover:scale-110">
                                <CloudDownload className="w-4 h-4" stroke={1.5} />
                            </span>
                        </button> */}
                    </div>
                </div>
                <div className="relative flex w-full px-6 pt-12 mb-24 md:mb-0 h-full md:h-screen md:px-12 md:w-1/2 bg-gradient-to-b from-neutral-950 to-transparent">
                    <div className="absolute inset-y-0 left-0 flex w-full md:items-center md:p-8">
                        {/* <svg width={0} height={0}>
                            <defs>
                                <clipPath id="blob" clipPathUnits="objectBoundingBox">
                                    <path ref={blob} d="M64.529 22.8432C67.2292 34.6767 57.9406 47.0606 46.3299 55.4266C34.7732 63.8477 20.8943 68.1958 11.4977 62.2515C2.15508 56.2522 -2.70523 39.9055 1.56104 25.9254C5.82731 11.8903 19.1662 0.221966 33.1531 0.00180762C47.1939 -0.163311 61.8289 11.0097 64.529 22.8432Z" fill="currentColor" />
                                </clipPath>
                            </defs>
                        </svg> */}
                        {/* <svg width={0} height={0} xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <clipPath id="blob" clipPathUnits="objectBoundingBox">
                                    <path ref={blob} d="M275 0.5C275.092 3.3543 275.127 6.18561 275.105 8.99391C279.185 172.975 401.509 244.428 519 211C449 332.5 144 339 144 519C144 339 80.5 259.5 0.5 259.5C79.1607 259.5 273.837 173.938 275.105 8.99391C275.035 6.18964 275 3.35833 275 0.5Z" fill="currentColor" />
                                </clipPath>
                            </defs>
                        </svg> */}
                        <svg width={0} height={0} xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <clipPath id="blob" clipPathUnits="objectBoundingBox">
                                    <path ref={blob} d="M64.529 22.8432C67.2292 34.6767 57.9406 47.0606 46.3299 55.4266C34.7732 63.8477 20.8943 68.1958 11.4977 62.2515C2.15508 56.2522 -2.70523 39.9055 1.56104 25.9254C5.82731 11.8903 19.1662 0.221966 33.1531 0.00180762C47.1939 -0.163311 61.8289 11.0097 64.529 22.8432Z" fill="currentColor" />
                                    {/* <path ref={blob} d="M411 5L394.648 139.1C393.138 151.479 392.382 157.669 393.686 162.888C394.84 167.514 397.178 171.564 400.608 174.878C404.477 178.615 410.214 181.056 421.69 185.938L546 238.827L360.62 291.716C343.506 296.598 334.952 299.037 326.766 302.776C319.511 306.088 312.495 310.139 305.999 314.766C298.668 319.986 292.278 326.174 279.493 338.554L141 472.654L157.352 338.554C158.862 326.174 159.617 319.986 158.314 314.766C157.16 310.139 154.821 306.088 151.392 302.776C147.524 299.037 141.786 296.598 130.31 291.716L6 238.827L191.381 185.938C208.494 181.056 217.05 178.615 225.234 174.878C232.489 171.564 239.504 167.514 246.001 162.888C253.33 157.669 259.722 151.479 272.507 139.1L411 5Z" /> */}
                                    {/* <path ref={blob} d="M368 5L376.111 150.508C376.859 163.939 377.231 170.655 379.487 176.318C381.485 181.338 384.563 185.733 388.597 189.328C393.148 193.383 399.33 196.032 411.697 201.33L545.655 258.717L369.922 316.105C353.699 321.402 345.59 324.049 338.086 328.106C331.435 331.7 325.158 336.095 319.506 341.116C313.127 346.779 307.866 353.494 297.34 366.927L183.309 512.434L175.199 366.927C174.451 353.494 174.076 346.779 171.822 341.116C169.823 336.095 166.746 331.7 162.712 328.106C158.162 324.049 151.979 321.402 139.613 316.105L5.65457 258.717L181.388 201.33C197.61 196.032 205.721 193.383 213.223 189.328C219.873 185.733 226.15 181.338 231.803 176.318C238.18 170.655 243.443 163.939 253.969 150.508L368 5Z" fill="currentColor" stroke="black" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" /> */}
                                    {/* <path ref={blob} d="M294.5 5L359.982 171.029C366.026 186.355 369.046 194.018 373.675 200.48C377.776 206.208 382.791 211.222 388.52 215.325C394.982 219.952 402.644 222.975 417.972 229.019L584 294.5L417.972 359.982C402.644 366.026 394.982 369.046 388.52 373.675C382.791 377.776 377.776 382.791 373.675 388.52C369.046 394.982 366.026 402.644 359.982 417.972L294.5 584L229.019 417.972C222.975 402.644 219.952 394.982 215.325 388.52C211.222 382.791 206.208 377.776 200.48 373.675C194.018 369.046 186.355 366.026 171.029 359.982L5 294.5L171.029 229.019C186.355 222.975 194.018 219.952 200.48 215.325C206.208 211.222 211.222 206.208 215.325 200.48C219.952 194.018 222.975 186.355 229.019 171.029L294.5 5Z" fill="currentColor" stroke="black" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" /> */}
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="relative z-20 flex w-full h-max md:px-0 top-16 md:inset-0">
                            <div className={`${color?.shadow} absolute inset-x-0 md:inset-0 scale-[1.02] z-20 bg-gradient-to-bl via-transparent`} style={{ clipPath: "url(#blob)", width: backgroundWidth, height: backgroundHeight }}></div>
                            {/* @ts-ignore */}
                            <div ref={heroImage} className="z-20 flex w-full aspect-square h-max" style={{ clipPath: "url(#blob)" }}>
                                <motion.img initial={{ scale: 1.05, y: 0 }} animate={{ scale: 1.05, y: -5 }} transition={{ type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", duration: 3 }} className="object-cover w-full h-full filter" src={imageBackground} alt="" />
                            </div>
                            {/* <motion.div initial={{ opacity: 1 }} animate={{ opacity: .5 }} transition={{ type: "tween", ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1, duration: 3 }} className={`${shadow} absolute z-10 w-48 h-48 rounded-full blur-xl bg-opacity-30 -top-4 right-12`}></motion.div> */}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}