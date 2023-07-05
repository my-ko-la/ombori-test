/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    extend: {
      animation: {
        fade: "fadeIn 1.2s ease-in-out",
      },

      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
