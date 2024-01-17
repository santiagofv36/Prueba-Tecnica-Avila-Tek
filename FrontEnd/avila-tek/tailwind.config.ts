import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "btn-primary": "#7F56D9",
        "light-gray": "#667085",
        primary: "#6941C6",
        tertiary: "#E9D7FE",
        "btn-tertiary": "#475467",
        quatertiary: "#667085",
        "b-secondary": "#EAECF0",
        "t-primary": "#101828",
      },
    },
  },
  plugins: [],
};
export default config;
