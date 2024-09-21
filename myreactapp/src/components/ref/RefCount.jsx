import { useRef } from "react";

const RefCount = () => {
  const myRef = useRef(0);
  const handleClick = () => {
    myRef.current = myRef.current + 1;
    console.log(myRef.current);
  };
  return (
    <div>
      <button onClick={handleClick}>{myRef.current}</button>
    </div>
  );
};

export default RefCount;
