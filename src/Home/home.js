import React, { useState } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import Nav from "../Nav/Nav.js";
import frontfilter1 from "../images/frontfilter1.jpg";
import frontfilter2 from "../images/frontfilter2.jpg";
import frontfirst from "../images/frontfirst.jpg";
import Cacomponent from "./carousel";
import useStyles from "./styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDroplet,
  faHouseFloodWater,
  faIndianRupeeSign,
  faMillSign,
  faMoneyBill,
  faPercent,
  faPercentage,
  faPlus,
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import amazon from "../images/amazon.png";

const Home = () => {
  const classes = useStyles();
  const [eopacity, seteopacity] = useState(0.36);
  const [oldScroll, setoldScroll] = useState(eopacity);
  console.log(eopacity);

  return (
    // '${eopacity}'
    <>
      <div
        id="topdiv"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,${eopacity}) 0%, #0c0c0c 100%),url('${frontfirst}')`,
          backgroundAttachment: "fixed",
          width: "100%",
          height: "200vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "transparent",

          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
        }}
      >
        <div style={{ height: "25vh" }}></div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Grid container>
            <Grid item sm={0} md={1}></Grid>

            <Grid item sm={12} md={6}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  // textAlign: "center",
                  // alignItems: "center",
                  height: "100%",
                }}
              >
                <Typography
                  style={{
                    color: "white",

                    fontSize: "170px",
                    fontWeight: 200,
                  }}
                >
                  Be
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "170px",
                    lineHeight: "0.5",
                  }}
                >
                  water
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "170px",
                  }}
                >
                  wise.
                </Typography>
                <Button
                  variant="contained"
                  align="right"
                  style={{ width: "170px" }}
                >
                  See More
                </Button>
              </div>
            </Grid>

            <Grid item md={1}></Grid>

            <Grid item sm={12} md={3}>
              <div>
                <div style={{ height: "50%", boxShadow: "0px 0px 5px #fff" }}>
                  <Cacomponent />
                </div>

                <br />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 0px 5px #fff",
                  }}
                >
                  <Typography
                    style={{
                      color: "#339a97",
                      fontFamily: "Montserrat",
                      fontSize: "18px",
                      fontWeight: "200",
                      lineHeight: "1.3em",
                      padding: "15px",
                      paddingBottom: "0",
                    }}
                  >
                    Why Rainmax filters are best in class:
                  </Typography>

                  <ul
                    style={{
                      color: "white",
                      fontSize: "18px",
                      fontWeight: "200",
                      lineHeight: "1.3em",
                    }}
                  >
                    <li>
                      <Typography>Two-stage filtration</Typography>
                    </li>
                    <li>
                      <Typography>Self-cleaning</Typography>
                    </li>
                    <li>
                      <Typography>100 micron SS 304 mesh</Typography>
                    </li>
                    <li>
                      <Typography>First flush system</Typography>
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        {
          (window.onscroll = () => {
            var header = document.getElementById("topdiv");
            var distanceToTop =
              window.pageYOffset + header.getBoundingClientRect().top;
            var elementHeight = header.offsetHeight;
            var scrollTop = document.documentElement.scrollTop;

            var opacity = 0.36;

            if (scrollTop > distanceToTop) {
              opacity = 0.5 + (scrollTop - distanceToTop) / elementHeight;
            }

            console.log(distanceToTop, elementHeight, scrollTop);
            if (opacity >= 0) {
              /* header.style.opacity = opacity; */

              seteopacity(opacity);
            }
          })
        }

        <br />
        <br />
        <br />
        <div
          style={{
            height: "30vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
          }}
        >
          <Grid container>
            <Grid item md={4}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
                className=" w3-animate-left"
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    border: "4px solid",
                    borderColor: "white",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      width: "4em",
                      height: "4em",
                      position: "relative",
                      display: "block",
                      color: "white",
                    }}
                    icon={faDroplet}
                  />
                </div>

                <Typography
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    textTransform: "none",
                    color: "#ffffff",
                  }}
                >
                  Water Supply
                </Typography>
                <br />
                <Typography
                  style={{
                    color: "#7E7979",
                    fontWeight: "300",
                    fontSize: "12px",
                  }}
                >
                  Ensures continuous water supply for your family, recharges
                  dead borewells and improves quality of groundwater.
                </Typography>
              </div>
            </Grid>

            <Grid item md={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
                className="w3-animate-bottom"
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    border: "4px solid",
                    borderColor: "white",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      width: "4em",
                      height: "4em",
                      position: "relative",
                      display: "block",
                      color: "white",
                    }}
                    icon={faIndianRupeeSign}
                  />
                </div>
                <Typography
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    textTransform: "none",
                    color: "#ffffff",
                  }}
                >
                  Cost Saving
                </Typography>
                <br />
                <Typography
                  style={{
                    color: "#7E7979",
                    fontWeight: "300",
                    fontSize: "12px",
                  }}
                >
                  Helps save money spent on water tankers. Your initial
                  investment is recovered in under a year.
                </Typography>
              </div>
            </Grid>

            <Grid item md={4}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
                className="w3-animate-right"
              >
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    border: "4px solid",
                    borderColor: "white",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesomeIcon
                    style={{
                      width: "4em",
                      height: "4em",
                      position: "relative",
                      display: "block",
                      color: "white",
                    }}
                    icon={faHouseFloodWater}
                  />
                </div>
                <Typography
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    textTransform: "none",
                    color: "#ffffff",
                  }}
                >
                  Reduced Flooding
                </Typography>
                <br />
                <Typography
                  style={{
                    color: "#7E7979",
                    fontWeight: "300",
                    fontSize: "12px",
                  }}
                >
                  Prevents the runoff of rooftop rainwater, thereby helping
                  reduce the possibility of Urban Flooding.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>

        <div style={{ backgroundColor: "white" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="black"
              fill-opacity="3"
              d="M0,64L240,192L480,192L720,256L960,64L1200,128L1440,192L1440,0L1200,0L960,0L720,0L480,0L240,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>

      <div
        style={{
          height: "110vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {}

        <br />
        <br />
        <Typography
          style={{
            fontSize: "40px",
            fontWeight: "200",
            lineHeight: "2.5",
          }}
        >
          Why harvest rainwater?
        </Typography>
        <div style={{ maxWidth: "800px" }}>
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: "200",
            }}
          >
            Many of urban India’s borewells have gone dry, and our country may
            soon be classified as a drought zone. An average Indian household
            now spends more than Rs. 12000 on water tankers every year.
            Rainwater Harvesting is the obvious solution to this problem. It
            helps ensure uninterrupted supply of clean water with low hardness,
            while also recharging groundwater and helping prevent urban
            flooding.
          </Typography>
        </div>

        <br />
        <br />
        <br />
        <br />

        <Grid container>
          <Grid item md={4} sm={12}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon
                style={{
                  width: "4em",
                  height: "4em",
                  position: "relative",
                  display: "block",
                  color: "#5b360d",
                }}
                icon={faPercent}
              />
              <Typography>SUCCESS RATE</Typography>
            </div>
          </Grid>

          <Grid item md={4} sm={12}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon
                style={{
                  width: "4em",
                  height: "4em",
                  position: "relative",
                  display: "block",
                  color: "#5b360d",
                }}
                icon={faPlus}
              />
              <Typography>HOUSEHOLDS SERVED</Typography>
            </div>
          </Grid>

          <Grid item md={4} sm={12}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon
                style={{
                  width: "4em",
                  height: "4em",
                  position: "relative",
                  display: "block",
                  color: "#5b360d",
                }}
                icon={faMoneyBill}
              />
              <Typography>LITRES SAVED</Typography>
            </div>
          </Grid>
        </Grid>
      </div>

      <div style={{ marginLeft: "40px" }}>
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
                Rainmax Filter
              </Typography>

              <Typography
                style={{
                  fontSize: "18px",
                  fontWeight: "200",
                }}
              >
                Rainmax’s filter is the most effective, affordable and
                easy-to-use solution for Rooftop Rainwater Harvesting.It carries
                out a two-stage filtration process through its fine 100 micron
                Stainless Steel (SS) 304 grade mesh and its unique first flush
                system, thus effectively removing dust, leaves, contaminants and
                other debris. Depending on your roof area and requirements,
                there are 4 variants of this filter.
              </Typography>
            </div>
          </Grid>

          <Grid
            style={{
              backgroundImage: `url('${frontfilter1}')`,
              backgroundSize: "cover",
              width: "100%",
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

          <Grid
            style={{
              backgroundImage: `url('${frontfilter2}')`,
              backgroundSize: "cover",
            }}
            item
            sm={12}
            md={6}
          ></Grid>

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
                Injection well
              </Typography>

              <Typography
                style={{
                  fontSize: "18px",
                  fontWeight: "200",
                }}
              >
                If you are trying to solve water problems for a residential
                township, gated community or large apartment building, the
                Rainmax Injection Well System is the most beneficial and
                cost-effective solution for you. It ensures constant supply of
                groundwater without having to depend on water tankers.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* Map div begins */}

      <div style={{ height: "100vh", backgroundColor: "white" }}>
        <Grid container>
          <Grid item md={2}></Grid>
          <Grid item md={5}>
            <br /> <br /> <br />
            <Typography
              style={{
                color: "#494949",
                fontSize: "40px",
                fontWeight: "200",
                lineHeight: "1em",
                bottom: "1px",
                padding: "20px",
                borderWidth: "0 0 1px",
                borderBlockEnd: "",
                borderStyle: "solid",
              }}
            >
              Buy online.
            </Typography>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <img src={amazon} style={{ height: "50px" }} alt="amazonimage" />
            <br />
            <br />
            <Typography
              style={{
                color: "#494949",
                fontSize: "40px",
                fontWeight: "200",
                lineHeight: "1em",
                bottom: "1px",
                padding: "20px",
                borderWidth: "0 0 1px",
                borderStyle: "solid",
              }}
            >
              Get in touch.
            </Typography>
            <br />
            <br />
            <Typography
              style={{
                color: "#494949",
                fontSize: "18px",
                fontWeight: "200",
                lineHeight: "1.5em",
              }}
            >
              Headquartered in Hyderabad.
            </Typography>
            <Typography
              style={{
                color: "#494949",
                fontSize: "18px",
                fontWeight: "200",
                lineHeight: "1.5em",
              }}
            >
              Available pan-India.
            </Typography>
            <br />
            <br />
            <FontAwesomeIcon
              style={{
                height: "1em",
                position: "relative",
                display: "inline-block",
                color: "#494949",
              }}
              icon={faMapMarker}
            />
            <Typography
              style={{
                color: "#494949",
                paddingLeft: "30px",
                position: "relative",
                bottom: "17px",
                fontWeight: "300",
                fontSize: "0.8em",
              }}
            >
              Hyderabad, Telangana, India
            </Typography>
            <FontAwesomeIcon
              style={{
                height: "1em",
                position: "relative",
                display: "inline-block",
                color: "#494949",
              }}
              icon={faEnvelope}
            />
            <Typography
              style={{
                color: "#494949",
                paddingLeft: "30px",
                position: "relative",
                bottom: "17px",
                fontWeight: "300",
                fontSize: "0.8em",
              }}
            >
              info@rainmax.co.in
            </Typography>
            <FontAwesomeIcon
              style={{
                height: "1em",
                position: "relative",
                display: "inline-block",
                color: "#494949",
              }}
              icon={faPhone}
            />
            <Typography
              style={{
                color: "#494949",
                paddingLeft: "30px",
                position: "relative",
                bottom: "17px",
                fontWeight: "300",
                fontSize: "0.8em",
              }}
            >
              091-89191-59431
            </Typography>
            <Typography
              style={{
                color: "#494949",
                fontSize: "18px",
                fontWeight: "200",
                lineHeight: "1.5em",
              }}
            >
              Our Social Pages
            </Typography>
            <br />
            <div
              style={{
                height: "40px",
                width: "40px",
                display: "inline-block",
              }}
            >
              <div
                style={{
                  height: "95%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10%",
                  backgroundColor: "white",
                }}
              >
                <FontAwesomeIcon
                  style={{
                    height: "1.5em",
                    position: "relative",
                    display: "inline-block",
                    color: "black",
                  }}
                  icon={faFacebookF}
                />
              </div>
            </div>
            &nbsp;
            <div
              style={{
                height: "40px",
                width: "40px",
                display: "inline-block",
              }}
            >
              <div
                style={{
                  height: "95%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10%",
                  backgroundColor: "white",
                }}
              >
                <FontAwesomeIcon
                  style={{
                    height: "1.5em",
                    position: "relative",
                    display: "inline-block",
                    color: "black",
                  }}
                  icon={faInstagram}
                />
              </div>
            </div>
            &nbsp;
            <div
              style={{
                height: "40px",
                width: "40px",
                display: "inline-block",
              }}
            >
              <div
                style={{
                  height: "95%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10%",
                  backgroundColor: "white",
                }}
              >
                <FontAwesomeIcon
                  style={{
                    height: "1.5em",
                    position: "relative",
                    display: "inline-block",
                    color: "black",
                  }}
                  icon={faLinkedin}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
