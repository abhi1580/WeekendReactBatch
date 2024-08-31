import React from "react";

const AletButton = ({ onAlert, children }) => {
  function onClickHandler(e) {
    e.stopPropagation();
    alert("You clicked button " + e.target);
  }
  return <button className="btn btn-primary m-2" onClick={onClickHandler}>{children}</button>;
};

export default AletButton;
