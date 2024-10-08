/* eslint-disable no-undef */
// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    screens: {
      xs: "480px", // Small phones
      sm: "640px", // Standard phones, small tablets
      md: "768px", // Small tablets, portrait tablets
      lg: "1024px", // Tablets, small laptops
      xl: "1280px", // Laptops, desktops
      "2xl": "1536px", // Large desktops
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            foreground: "#000000",
            background: "#fafafa",
            secondary: {
              DEFAULT: "#293957",
              foreground: "#eaf1ff",
              50: "#eaf1ff",
              100: "#cad5ea",
              200: "#a8b8d6",
              300: "#869cc5",
              400: "#6580b4",
              500: "#4b679a",
              600: "#3a5079",
              700: "#293957",
              800: "#162236",
              900: "#040b17",
            },
            primary: {
              DEFAULT: "#bb2a44",
              foreground: "#ffe6ec",
              50: "#ffe6ec",
              100: "#f6bfc8",
              200: "#e996a5",
              300: "#df6c81",
              400: "#d5445d",
              500: "#bb2a44",
              600: "#932035",
              700: "#6a1625",
              800: "#410a16",
              900: "#1d0007",
            },
            focus: "#932035",
          },
        },
        dark: {
          colors: {
            foreground: "#ffffff",
            background: "#121212",
            secondary: {
              foreground: "#293957",
              DEFAULT: "#eaf1ff",
              50: "#eaf1ff",
              100: "#cad5ea",
              200: "#a8b8d6",
              300: "#869cc5",
              400: "#6580b4",
              500: "#4b679a",
              600: "#3a5079",
              700: "#293957",
              800: "#162236",
              900: "#040b17",
            },
            primary: {
              DEFAULT: "#bb2a44",
              foreground: "#ffe6ec",
              50: "#ffe6ec",
              100: "#f6bfc8",
              200: "#e996a5",
              300: "#df6c81",
              400: "#d5445d",
              500: "#bb2a44",
              600: "#932035",
              700: "#6a1625",
              800: "#410a16",
              900: "#1d0007",
            },
            focus: "#932035",
          },
        },
      },
    }),
  ],
};
