module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        grey: "var(--grey)",
        olive: "var(--olive)",
        terracotta: "var(--terracotta)",
        timber: "var(--timber)",
      }
    },
  },
  plugins: [],
}