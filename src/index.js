import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import theme from "./theme";

import Aboutuscard from "./aboutus/aboutuscard.js";
// import Card from "./blog/card.js";
ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* <App /> */}
    <Aboutuscard />
  </ThemeProvider>,
  document.getElementById("root")
);
