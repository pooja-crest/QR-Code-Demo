module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#4080FF",
        danger: "#D63649",
        secondary: "#B0BAC9",
      },
      inset: {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "16": "4rem",
        "24": "6rem",
        "32": "8rem",
        "48": "12rem",
        "64": "16rem",
      },
    },
    backgroundColor: (theme) => ({
      base: "#F4F6FC",
      primary: "#4080FF",
      danger: "#D63649",
    }),
    fontSize: {
      xs: "12px",
      base: "15px",
      "28px": "28px",
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2xl": "1536px",
    },
  },
  variants: {},
  plugins: [],
};
