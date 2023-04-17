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
        "satoshi",
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
      caption: "0.8rem",
      paragraph: "1rem",
      h5: "1.25rem",
      h4: "1.563rem",
      h3: "24xpx",
      h2: "2.441rem",
      h1: "3.052rem",
      title: "5rem",
    },
    colors: {
      green: "#44694B",
      tan: "#F7F6F2",
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};
