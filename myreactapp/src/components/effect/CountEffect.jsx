import { useEffect, useState } from "react";

const CountEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]); //with dependancies

  return (
    <div>
      <h2>Count : {count} times</h2>
    </div>
  );
};

export default CountEffect;
