/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        bounceDown: "bounceDown 3s ease-in-out infinite", // 2 seconds duration, infinite loop
      },
      keyframes: {
        bounceDown: {
          "0%, 100%": {
            transform: "translateY(-20px)", // Start and end at -20px (upward)
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            transform: "translateY(20px)", // Middle of the animation goes down 20px
            animationTimingFunction: "ease-in-out",
          },
        },
      },
    },
  },
  plugins: [],
};
