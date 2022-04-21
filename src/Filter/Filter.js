import React from "react";
import filterpage from "../images/filterpage.jpg";
const Filter = () => {
  return (
    <>
      <div
        style={{
          height: "80vh",
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.33) 0%, #A1A1A1 100%),url('${filterpage}')`,
          backgroundSize: "cover",
        }}
      ></div>
    </>
  );
};

export default Filter;
