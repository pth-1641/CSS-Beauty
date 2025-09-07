/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff3e00",
        dark: "#1c1e22",
      },
    },
  },
  plugins: [],
};
