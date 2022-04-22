import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import theme from "./theme";
import Card from "./blog/card.js";
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Card />
  </ThemeProvider>,
  document.getElementById("root")
);
