import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "309px",
      },
      colors: {
        blue: {
          50: "#2e57fa",
          60: "#0637f9",
          70: "#052dcc",
        },
        "disabled-btn-text": "#aaafbd",
        "status-green": "#16ba44",
        "main-gray": "#b1b9db",
        "status-bg-gray": "#f4f6fe",
        "tab-gray": "#5c5f6b",
        "txt-black": "#000000",
        "txt-white": "#ffffff",
      },
      lineHeight: {
        normal: "1.5",
      },
      fontSize: {
        base: "16px",
        title: "26px",
        subtitle: "12px",
      },
      fontWeight: {
        bold: "700",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: {
          fontSize: theme("fontSize.base"),
          lineHeight: theme("lineHeight.normal"),
        },
      });
    }),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".title": {
          fontSize: theme("fontSize.title"),
          lineHeight: theme("lineHeight.normal"),
          fontWeight: theme("fontWeight.bold"),
        },
        ".subtitle": {
          fontSize: theme("fontSize.subtitle"),
          lineHeight: theme("lineHeight.normal"),
          color: theme("colors.main-gray"),
        },
      });
    }),
  ],
};
export default config;
