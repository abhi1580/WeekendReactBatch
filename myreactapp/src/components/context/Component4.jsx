import React, { useContext } from "react";
import { MyContext } from "./Component1";

// const Component4 = ({ c3msg }) => {
const Component4 = ({ c3msg }) => {
  //subscribe to context object and read context data
  const message = useContext(MyContext);
  return (
    <div className="border border-3 border-danger m-3 p-3 rouded">
      <h2>Component 4</h2>
      <h4>{message}</h4>
    </div>
  );
};

export default Component4;
