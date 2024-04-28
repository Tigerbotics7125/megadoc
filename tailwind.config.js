// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [nextui({
        themes: {
            dark: {
                colors: {
                    primary: {
                        DEFAULT: "#FF502E",
                        foreground: "#FFFFFF"
                    },
                    focus: "#FF502E"
                }
            },
            light: {
                colors: {
                    primary: {
                        DEFAULT: "#FF502E",
                        foreground: "#000000"
                    },
                    focus: "#FF502E"
                }
            }
        }
    })],
};