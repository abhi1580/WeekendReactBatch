import React, { useState } from "react";

const CountState = () => {
  let [count, setCount] = useState(0);
  let [bkColor, setBkColor] = useState("pink");
  const [toggleColor, setToggleColor] = useState(false);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
    let isPink = toggleColor;
    setToggleColor(!isPink);
    if (isPink) setBkColor("cyan");
    else setBkColor("pink");
  }
  return (
    <div>
      <button
        className="btn btn-primary m-2"
        style={{ backgroundColor: bkColor }}
        onClick={handleClick}
      >
        {count}
      </button>
    </div>
  );
};

export default CountState;
