import React, { useState, createContext } from "react";
import Component2 from "./Component2";
//globally create context object and export context
export const MyContext = createContext();
const Component1 = () => {
  const [message, setMessage] = useState("");
  return (
    <div className="border rounded border-3 border-dark m-3 p-3">
      <h2> Component 1</h2>
      <input
        className="form-control"
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {/* <Component2 c1msg={message} /> */}
      <MyContext.Provider value={message}>
        <Component2 />
      </MyContext.Provider>
    </div>
  );
};

export default Component1;
