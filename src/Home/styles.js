import { makeStyles } from "@material-ui/core/styles";
import frontfirst from "./images/frontfirst.jpg";
export default makeStyles((theme) => ({
  topdiv: {
    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.36) 0%, #0c0c0c 100%),url('${frontfirst}')`,
    backgroundAttachment: "fixed",
    width: "100%",
    height: "200vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "transparent",

    transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
  },

  topdiv2: {
    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.36) 0%, #0c0c0c 100%),url('${frontfirst}')`,
    backgroundAttachment: "fixed",
    width: "100%",
    height: "200vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "transparent",

    transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
  },
}));
