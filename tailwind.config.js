const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        "./src/pages/**/*.{js,ts,jsx,,tsx}",
        "./src/components/**/*.{js,ts,jsx,,tsx}",
    ],
    darkMode: "class",
    theme: {
        fontFamily: {
            sans: ["Inter", ...fontFamily.sans],
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            red: colors.red,
            orange: colors.orange,
            yellow: colors.amber,
            green: colors.emerald,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.purple,
            pink: colors.pink,
        },
        zIndex: {
            "0": 0,
            "auto": "auto",
            "dropdown": 1000,
            "sticky": 1100,
            "banner": 1200,
            "overlay": 1300,
            "modal": 1400,
            "popover": 1500,
            "skipLink": 1600,
            "toast": 1700,
            "tooltip": 1800,
        },
        extend: {
            boxShadow: {
                "bottom-inset": "inset 0 -1px 0 rgba(0,0,0,.10)",
            },
            opacity: {
                "4": ".04",
                "8": ".08"
            },
            width: {
                "4.5": "1.125rem",
            },
            height: {
                "4.5": "1.125rem",
            }
        },
    },
    variants: {
        extend: {
            backgroundOpacity: ["active"],
            backgroundColor: ["active"],
            textColor: ["active"],
            ringWidth: ["focus-visible"],
            ringColor: ["focus-visible"],
            ringOffsetWidth: ["focus-visible"],
            ringOpacity: ["focus-visible"],
        },
    },
    plugins: [],
}
