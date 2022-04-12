import React from "react";
import { Typography } from "@material-ui/core";
import Nav from "./Nav";
import aa from "./images/admin-ajax.jpg";
const App = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundImage: `url('${aa}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          imageRendering: "-webkit-optimize-contrast",
        }}
      >
        <Nav />
        <Typography>lol</Typography>
      </div>
    </>
  );
};

export default App;
