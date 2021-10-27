import React from "react";
import LoaderImg from "./img/loader.gif";

function Loader() {
  return (
    <div>
      <img
        src={LoaderImg}
        style={{ width: "300px", marginLeft: "30%", marginTop: "10%" }}
        alt="loader"
      />
    </div>
  );
}

export default Loader;
