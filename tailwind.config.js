/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        box: "0px 20px 40px 0px rgba(212, 210, 244, 0.50)",
      },
      backgroundImage: {
        "gradient-box":
          "linear-gradient(135deg, hsl(236, 72%, 79%) 0%, hsl(237, 63%, 64%) 100%)",
      },
      colors: {
        "very-light-grayish-blue": "hsl(240, 78%, 98%)",
        "light-grayish-blue": "hsl(234, 14%, 74%)",
        "grayish-blue": "hsl(233, 13%, 49%)",
        "dark-grayish-blue": "hsl(232, 13%, 33%)",
      },
    },
  },
  plugins: [],
};
