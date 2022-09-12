/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "ct-yellow": "#F5CB34",
                "ct-green": "#5CBC65",
                "ct-red": "#EA3939",
                "ct-white": "#FFFFFF",
                "ct-black": "#1E1E1E",
                "ct-light-gray": "#F5F5F5",
            },
            fontFamily: {
                inter: ["Inter"],
            },
            keyframes: {
                expand: {
                    "0%": { transform: "scale(0)", opacity: 0 },
                    "50%": { opacity: 1 },
                    "100%": { transform: "scale(1)" },
                },
                grow: {
                    "0%": { transform: "scale(1)" },
                    "100%": { transform: "scale(1.05)" },
                },
            },
            animation: {
                expand: "expand 0.5s ease-out forwards",
                grow: "grow 0.2s ease-out forwards",
            },
            maxWidth: {
                "90vw": "90vw",
            },
        },
    },
    plugins: [],
};
