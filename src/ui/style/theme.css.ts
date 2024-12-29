import { createGlobalTheme } from "@vanilla-extract/css";

const theme = createGlobalTheme(":root", {
  gray: {
    50: "#FBFBFB",
    100: "#F2F2F2",
    150: "#E1E1E1",
    200: "#D4D4D4",
    300: "#B9B9BC",
    400: "#96979C",
    500: "#7A7D85",
    600: "#54575F",
    700: "#474A52",
    800: "#343842",
    900: "#282B34",
    1000: "#000000",
  },
  white: "#FFFFFF",
  green: "#33A748",
  red: "#FF3C42",
  black: "#373E38",
});

export default theme;
