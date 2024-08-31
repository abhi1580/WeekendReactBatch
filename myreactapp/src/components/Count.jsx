import React from "react";

const Count = () => {
  let counter = 0;

  function handleClick() {
    counter = counter + 1;
    console.log(counter);
  }
  return (
    <div>
      <button className="btn btn-primary m-2" onClick={handleClick}>{counter}</button>
    </div>
  );
};

export default Count;
