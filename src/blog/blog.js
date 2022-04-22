import React from "react";
import blogpage from "../images/blogpage.jpg";
const Blog = () => {
  return (
    <>
      <div
        style={{
          height: "80vh",
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.18) 0%, #A1A1A1 100%),url('${blogpage}')`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </>
  );
};

export default Blog;
