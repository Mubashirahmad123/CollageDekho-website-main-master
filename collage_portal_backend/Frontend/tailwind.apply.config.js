
const tailwindApplyConfig = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        royalblue: "rgba(16, 103, 234, 0.92)",
        dodgerblue: "rgba(54, 140, 255, 0.92)",
        gainsboro: "#d9d9d9",
        whitesmoke: "#efecec",
        olive: "rgba(135, 127, 53, 0.68)",
      },
      spacing: {},
      fontFamily: {
        "fira-sans-extra-condensed": "'Fira Sans Extra Condensed'",
      },
      borderRadius: {
        mid: "17px",
      },
    },
    fontSize: {
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};


export default tailwindApplyConfig;