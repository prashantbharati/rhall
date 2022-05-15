import React from "react";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
const App = (props) => {
  const classes = useStyles();
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const user = props.user,
    setuser = props.setuser;
  console.log(user, setuser);
  return (
    <div className={classes.page}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography variant="h2">
          {" "}
          See How much water you save in a year
        </Typography>
      </div>
      <br />
      <Button className={classes.button} variant="contained" onClick={next}>
        Explore
      </Button>
    </div>
  );
};

export default App;

// #68CBC1
