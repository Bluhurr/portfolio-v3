import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abril: ["var(--font-abril)"],
        abel: ["var(--font-abel)"],
      },
      backgroundImage: {
        "gradient-my-blue":
          "linear-gradient(63deg, rgba(28,22,67,1) 15%, rgba(35,106,180,1) 50%, rgba(0,185,255,1) 79%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
