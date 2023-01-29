import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: "#fff",
    secondary: "#b6aebf",
    secondaryBg: "#141217",
    fontcolor: "#140034",
    fontprimary: "#000",
    fontdark: "#72809C",
    fonttitle: "#8895AE",
    textInput: "#D7D7D7",
    borderprimary: "#5B6178",
    bordersecondary: "#242A3C",
    danger: "#FF0000",
    headingInfo: "#8C97AB",
    white: "#FFF",
    black: "#000",
    pink: "#767d96",
    primaryButton: "#fff",
    primaryButtonText: "#070608",
    primaryButtonOutline: "#D1ADFF",
    primaryHover: "#C9C2D1",
    secondaryButton: "#201C24",
    gradientButton:
      "linear-gradient(90.12deg, #00B7E9 0.1%, #C91CC3 99.88%, #C81CC5 99.89%, #DA3794 99.89%)",
    selectBg: "#142c6f",
    coolGrey: "#D7D7D7",
    borderColor: "#E8E4ED",
    optionActive: "#6868f4",
    footerLinks: "#5A6781",
    filterColor: "rgba( 9, 18, 35, 0.25 )",
    filterCardShadow: "rgb(31 38 135 / 37%)",
    frameBorderColor: "rgb(255 255 255 / 41%)",
    cardLayoutBg:
      "linear-gradient( 180deg, #ffffff 0%, rgba(255, 255, 255, 0.93) 100%);"
  },
  fonts: ["sans-serif", "Roobert", "Poopins"],
  fontSizes: {
    xsm: "1rem",
    sm: "1.4rem",
    md: "1.6rem",
    lg: "2.4rem",
  },
  buttonSizes: {
    sm: "10rem",
    md: "14rem",
    lg: "20rem",
  },
  device : {
    mobileS: `(min-width: 320px)`,
    mobileM: `(min-width: 375px)`,
    mobileL: `(min-width: 425px)`,
    tablet: `(max-width: 768px)`,
    laptop: `(min-width: 1024px)`,
    laptopL: `(min-width: 1440px)`,
    desktop: `(min-width: 2560px)`,
    desktopL: `(min-width: 3460px)`
  }
};
