import React from "react";
import AletButton from "./AletButton";

const Toolbar = () => {
  return (
    <div
      style={{ backgroundColor: "pink" }}
      onClick={() => {
        alert("Toolbar div is clicked");
      }}
    >
      <AletButton children={"Click Me!"}/>
    </div>
  );
};

export default Toolbar;
