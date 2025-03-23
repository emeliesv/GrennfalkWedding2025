/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Courier New", "serif"],
        display: ["Almond Whisp", "display"],
      },
      backgroundColor: {
        jossanKalleBrand: "#902119",
        jossanKalleSecondary: "#FEF3F3",
        jossanKalleAccent: "#DCB4B3",
        jossanKalleNeutralLight: "#FFFFF",
        jossanKalleNeutralDark: "#0C0909",
      },
      textColor: {
        jossanKalleBrand: "#902119",
        jossanKalleSecondary: "#FEF3F3",
        jossanKalleNeutralDark: "#0C0909",
      },
      fontSize: {
        h1: "5rem",
        h2: "4rem",
        bodyregular: "1.125rem",
        bodys: "0.875rem",
        linkText: "1rem",
        btnText: "3rem",
      },
    },
  },
  plugins: [],
};
