import type { Config } from "tailwindcss"

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                'argesta': ['Argesta', ...defaultTheme.fontFamily.sans],
                'branch': ['Branch', ...defaultTheme.fontFamily.sans],
                'zighead': ['Zighead', ...defaultTheme.fontFamily.sans],
                'script': ['Autography', ...defaultTheme.fontFamily.sans]
            }
        },
    },
    plugins: [],
};
export default config