import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const colors = {
  primary: "#750C0C",
  background: "#F5F5F5",
  grey: "#444444",
  secondary: "#058076",
  //solid colors
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      // small
      sm: 600,
      // medium
      md: 900,
      // large
      lg: 1200,
      // extra-large
      xl: 1500,
    },
  },

  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
  },

  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    info: {
      main: colors.grey,
    },
    action: {
      main: "#fff",
    },
    background: {
      default: "#f5f5f5",
    },
  },
});

export default responsiveFontSizes(theme);
