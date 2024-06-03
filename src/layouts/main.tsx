import Cursor from "@/components/cursor"
import { AnimatePresence } from "framer-motion"
import Head from "next/head"
import { ReactNode } from "react"

type MainLayoutProps = {
    title: string,
    overrideTitle: boolean,
    children: ReactNode
}

export default function MainLayout({ title, overrideTitle = false, ...props }: MainLayoutProps) {
    const appName = process.env.APP_NAME

    return (
        <div id="main-app-layout">
            <Head>
                <title>{overrideTitle ? title : title + ' — ' + appName}</title>
            </Head>
            {/* <Cursor /> */}
            <AnimatePresence mode="wait">
                <div>
                    {/* Child */}
                    {props.children}
                </div>
            </AnimatePresence>
        </div>
    )
}