import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  a: {
    fontFamily: ['"Montserrat"', "Open Sans"].join(","),
  },

  typography: {
    h1: {
      fontFamily: '"Poppins", Open Sans',
    },
    fontFamily: ['"Montserrat"', "Open Sans"].join(","),
  },
});

export default theme;
