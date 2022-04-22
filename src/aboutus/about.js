import React from "react";
import aboutpage from "../images/aboutpage.jpg";
const about = () => {
  return (
    <>
      <div
        style={{
          height: "80vh",
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.23) 0%, #A1A1A1 100%),url('${aboutpage}')`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </>
  );
};

export default about;
