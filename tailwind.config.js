/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px"
    },
    extend: {
      colors:{
        purple: "hsl(259, 100%, 65%)",
        LightRed: "hsl(0, 100%, 67%)",
        white: "hsl(0, 0%, 100%)",
        OffWhite: "hsl(0, 0%, 94%)",
        LightGrey: "hsl(0, 0%, 86%)",
        SmokeyGrey: "hsl(0, 1%, 44%)",
        OffBlack: "hsl(0, 0%, 8%)",
      },
    },
    letterSpacing:{
      '1': '0.01em',
      '2': '0.025em',
      '3': '0.05em',
      '4': '0.1em',
    },
  plugins: [],
}
}
