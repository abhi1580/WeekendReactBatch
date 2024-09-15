import React from "react";
import Component4 from "./Component4";

// const Component3 = ({ c2msg }) => {
const Component3 = () => {
  return (
    <div className="border border-3 border-primary rounded m-3 p-3">
      <h2>Component 3</h2>
      {/* <Component4 c3msg={c2msg} /> */}
      <Component4 />
    </div>
  );
};

export default Component3;
