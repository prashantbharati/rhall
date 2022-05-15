import { makeStyles } from "@material-ui/core/styles";
import waterharvested from "./waterharvested.jpeg";
import houseimg from "./houseimg.png";
import roofimg1 from "./roofnew.png";
export default makeStyles({
  page: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    background: "linear-gradient(to right,#d2ccc4,#2f4353);",
  },

  roofbutton: {
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    // justifyContent: "space-between",
  },

  button: {
    display: "table-cell",
    backgroundColor: "#68cbc1",
    color: "white",
    /* // width: "100%", */
    width: "200px",
    /* // display: "flex", */
    fontWeight: "700",
    fontSize: "20px",
    borderStyle: "none",
    padding: "0.5em",
    borderRadius: "999px 999px 999px 999px",
    boxShadow: "0px 5px 15px 0px rgb(39 48 112 / 51%)",
  },
  rooftop: {
    backgroundColor: "grey",
    backgroundImage: `url(${roofimg1})`,
    backgroundSize: "cover",
    overflow: "hidden",
    color: "white",
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  roof: {
    display: "flex",
    flex: "1 1 0",
    flexDirection: "row",
  },
  roofleft: {
    backgroundImage: `url(${houseimg})`,
    backgroundColor: "grey",
    height: "100vh",
    "@media (max-width: 600px)": {
      height: "40vh",
    },

    // maxWidth: "70%",
    // width: "50%",
    backgroundSize: "cover",
    overflow: "hidden",
  },
  map: {
    display: "block",
    "@media (max-width: 1030px)": {
      display: "none",
    },
  },
  mapbutton: {
    display: "none",
    "@media (max-width: 1030px)": {
      display: "block",
    },
  },
  waterharvested: {
    backgroundImage: `url(${waterharvested})`,
    height: "100vh",
    fontWeight: "700",
    backgroundSize: "cover",
    overflow: "hidden",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
});
