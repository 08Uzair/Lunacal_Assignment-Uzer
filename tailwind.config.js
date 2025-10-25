module.exports = {
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "50%": { opacity: "0.4" },
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 1.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
