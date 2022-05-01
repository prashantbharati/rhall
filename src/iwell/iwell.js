import React from "react";
import iwell from "../images/iwellpage.jpg";
import { Typography, Button, Grid } from "@material-ui/core";
import frontfilter2 from "../images/frontfilter2.jpg";
const Iwell = () => {
  return (
    <>
      <div
        style={{
          height: "80vh",
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, #A1A1A1 100%),url('${iwell}')`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
        <br />
        <Typography
          style={{
            color: "#FFFFFF",
            fontFamily: "Poppins",
            fontSize: "90px",
            fontWeight: "500",
          }}
          // variant="h1"
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Injection Well System
        </Typography>
      </div>

      <div style={{ boxSizing: "border-box", marginLeft: "40px" }}>
        <Grid container>
          {/* <Grid item sm={0} md={1}></Grid> */}
          <Grid item sm={12} md={6}>
            <div
              style={{
                height: "130vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginRight: "20px",
                // alignItems: "center",
              }}
            >
              <Typography
                style={{
                  fontSize: "40px",
                  fontWeight: "200",
                  lineHeight: "2.5",
                }}
              >
                What is it?
              </Typography>
              <Typography
                style={{
                  fontSize: "18px",
                  fontWeight: "200",
                }}
              >
                The Rainmax Injection Well System is the most beneficial and
                cost-effective technique for large roof areas (townships, gated
                communities & apartment buildings) to ensure constant supply of
                groundwater without depending on water tankers. This system has
                the ability to facilitate borewell recharge or groundwater
                recharge with 80,000 – 1,00,000 litres of water per hour. This
                means that 1 season of average rainfall will provide 8,00,000 –
                10,00,000 litres of water for the domestic needs of an apartment
                building of 50 flats (10,000 sq. ft. rooftop area).
              </Typography>
              <br /> <br /> <br />
              <Button
                variant="outlined"
                align="right"
                style={{
                  width: "50%",
                  fontSize: "16px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  lineHeight: "1em",
                  letterSpacing: "1.5px",
                  textShadow: "0px 0px 0px rgb(0 0 0 / 30%)",
                  fill: "#000000",
                  color: "#000000",
                  backgroundColor: "rgba(64,84,178,0)",
                  borderStyle: "solid",
                  borderWidth: "2px 2px 2px 2px",
                  borderColor: "#1e1e1e",
                  borderRadius: "5px 5px 5px 5px",
                  boxShadow: "0px 0px 15px 0px rgb(0 0 0 / 11%)",
                  padding: "15px 35px 15px 35px",
                }}
              >
                Download Broucher
              </Button>
            </div>
          </Grid>

          <Grid
            style={{
              backgroundImage: `url('${frontfilter2}')`,
              backgroundSize: "cover",
            }}
            item
            sm={12}
            md={6}
          ></Grid>
        </Grid>
      </div>

      <div style={{ marginRight: "40px" }}>
        <Grid container>
          {/* <Grid item sm={0} md={1}></Grid> */}

          <Grid item sm={12} md={6}></Grid>

          <Grid item sm={12} md={6}>
            <div
              style={{
                height: "130vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: "20px",
                // alignItems: "center",
              }}
            >
              <Typography
                style={{
                  fontSize: "40px",
                  fontWeight: "200",
                  lineHeight: "2.5",
                }}
              >
                How it works
              </Typography>

              <Typography
                style={{
                  fontSize: "18px",
                  fontWeight: "200",
                }}
              >
                The Rainmax Injection Well System, which recharges shallow
                aquifers, is especially effective in granitic soils where
                surface harvesting pits are rendered ineffective. Rainwater from
                the rooftop or ground surface enters into the desilting chamber
                where heavy particles are trapped. The water then passes through
                filtration media and enters a shallow borewell, thereby
                recharging the aquifers. This also results in an increase in the
                groundwater table in surrounding areas.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Iwell;
