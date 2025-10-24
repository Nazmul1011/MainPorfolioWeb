export default {
  darkMode: "class", // make sure this is enabled
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B80ED",
        colorbg: "#F2F4F8",
        darkbg: "#0a0a0a", // ← deep black (like your image)
      },
    },
  },
  plugins: [require("daisyui")],
};
