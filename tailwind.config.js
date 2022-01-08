module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          backgroundDark: "#444444",
          backgroundLight: "#C4C4C4",
        }
      },
      spacing: {
        "info-box": '60rem',
        "info-box-inner": '55rem',
        "input": "30rem"
      }
    },
  },
  plugins: [],
}
