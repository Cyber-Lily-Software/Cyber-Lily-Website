import { createMuiTheme } from "@material-ui/core/styles";

export const customTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
