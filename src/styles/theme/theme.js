import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "480px",
  md: "700px",
  lg: "992px",
  xl: "1280px",
  "2xl": "1536px",
};

export const theme = extendTheme({ breakpoints });
