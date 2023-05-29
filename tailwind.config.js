/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
    },
    fontSize: {
      subtitle: "14px",
      sm: "0.8rem",
      base: "1rem",
      lg: "48px",
      xl: "145px",
      title: "48px",
      h1: "36px",
      h2: "32px",
      h3: "32px",
      h4: "24px",
      p: "24px",
    },
    colors: {
      green: "#44694B",
      tan: "#F7F6F2",
      grayLight: "#F5F5F5",
      grayDark: "#EDEDED",
      white: "#FEFEFE",
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
