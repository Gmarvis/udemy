import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      segoe: "Segoe UI Emoji",
    },

    extend: {
      screens: {
        sm: "600px",
        // => @media (min-width: 600px) { ... }

        md: "800px",
        // => @media (min-width: 800px) { ... }
      },
      zIndex: {
        "100": "100",
      },
      listStyleImage: {
        checkmark: "checkmark-list-style",
        overlay: "modal-overlay",
        modal: "popup-modal",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "17": " 4.5rem",
        "23": "5.5rem",
        "90": "22rem",
        "100": "25rem",
        "110": "30rem",
        "128": "32rem",
        "144": "36rem",
        "150": "40rem",
        "170": "45rem",
        "175": "48rem",
        "180": "50rem",
      },
    },
    colors: {
      prple: "#a32cc4",
      violt: "#710193",
      midnight: "#121063",
      black: "#000",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      bermuda: "#78dcca",
      ctitle: "#2d2f31",
      bestseller: "#fef08a",
      // gray: "#ccc",
      gray2: "#ddd",
      udemy: "#6A6F73",
      white: "#fff",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
