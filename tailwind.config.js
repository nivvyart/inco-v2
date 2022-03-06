module.exports = {
  content: [
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/pages/posts/*.{js,ts,jsx,tsx}",
    "./public"
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        grey: "var(--grey)",
        oliveg: "var(--oliveg)",
        terracotta: "var(--terracotta)",
        timber: "var(--timber)",
      }
    },
  },
  plugins: [],
}