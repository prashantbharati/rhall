import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    display: "flex",
    justifContent: "space-between",
    alignItems: "center",
    transition: "0.6s",
    padding: "40px 100px",
    zIndex: "10000",
  },

  headersticky: {
    padding: "5px 100px",
    background: "rgba(0, 0, 0, 0.45);",
    backdropFilter: "saturate(180%) blur(20px)",
  },
  headerlogo: {
    position: "relative",
    fontWeight: "700",
    color: "#fff",
    textDecoration: "none",
    fontSize: "2em",
    fontFamily: "Montserrat",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },

  headerul: {
    position: "relative",
    fontFamily: "Montserrat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  headerulli: {
    fontFamily: "Montserrat",
    position: "relative",
    listStyle: "none",
  },

  headerullia: {
    position: "relative",
    margin: "0 15px",
    textDecoration: "none",
    color: "#fff",
    letterSpacing: "2px",
    fontWeight: "500px",
    transition: "0.6s",
  },

  banner: {
    position: "relativ",
    width: "100%",
    height: "100vh",
    background: "url(admin-ajax.jpg)",
    backgroundSize: "cover",
  },

  headerstickylogo: {
    position: "relative",
    fontWeight: "700",
    // color: "#fff",
    textDecoration: "none",
    fontSize: "2em",
    fontFamily: "Montserrat",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#000",
  },

  headerstickyullia: {
    color: "#000",
  },
}));
