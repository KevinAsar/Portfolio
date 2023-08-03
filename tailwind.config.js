/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index1git.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
