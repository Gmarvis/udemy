import type { Config } from 'tailwindcss'
// import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      "segoe": "Segoe UI Emoji"
    },
    screens: {
      sm: "600px",
      // => @media (min-width: 600px) { ... }

      md: "800px",
      // => @media (min-width: 800px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      zIndex: {
        "100":"100"
      },
      listStyleImage: {
        checkmark: "checkmark-list-style",
        overlay: "modal-overlay",
        modal: "popup-modal"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "17":" 4.5rem",
        "23": "5.5rem",
        "90": "22rem",
        "100": '25rem', 
        "110": "30rem",
        "128": "32rem",
        "144": "36rem",
        "150": "40rem",
        "170": "45rem",
        "175": "48rem",
        "180": "50rem",
      },
    },
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   purple: "#a32cc4",
    //   violet: "#710193",
    //   midnight: "#121063",
    //   black: "#000",
    //   tahiti: "#3ab7bf",
    //   silver: "#ecebff",
    //   "bubble-gum": "#ff77e9",
    //   bermuda: "#78dcca",
    //   ctitle: "#2d2f31",
    //   bestseller: "#fef08a",
    //   white: "#fff",
    //   gray: "#ccc",
    //   gray2: "#ddd",
    //   udemy: "#6A6F73",
    // },
  },
  darkMode: "class",
  // plugins: [nextui()]
};
export default config

