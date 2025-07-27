module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#6D28D9",
        coral: "#FB7185",
        emerald: "#10B981",
        greyglass: "rgba(0, 0, 0, 0.05)",
        offwhite: "#FAFAF9"
      },
      fontFamily: {
        heading: ["'DM Serif Display'", "serif"],
        body: ["'Inter'", "sans-serif"]
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.06)"
      }
    }
  },
  plugins: []
}
