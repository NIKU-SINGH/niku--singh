import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        "1": "1px",
        "2": "2px",
        // Add more sizes as needed
      },
      textStrokeColor: {
        black: "#000000",
        white: "#ffffff",
        // Add more colors as needed
      },
      fontFamily: {
        sanFrancisco: ["San Francisco", "sans-serif"],
        monumentExtended: ["Monument Extended", "sans-serif"],
      },
      fontWeight: {
        ultraLight: "100",
        thin: "200",
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-stroke": {
          "-webkit-text-stroke": "1px black",
        },
        ".text-stroke-2": {
          "-webkit-text-stroke": "2px black",
        },
        ".text-stroke-white": {
          "-webkit-text-stroke-color": "#ffffff",
        },
        ".text-stroke-black": {
          "-webkit-text-stroke-color": "#000000",
        },
        // Add more utility classes as needed
      });
    }),
  ],
};

export default config;
