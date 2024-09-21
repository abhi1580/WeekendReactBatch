import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const timeIntervalRef = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setCurrentTime(Date.now());
    clearInterval(timeIntervalRef.current);
    //use of ref object to store timeout IDs
    timeIntervalRef.current = setInterval(() => {
      setCurrentTime(Date.now());
    }, 10);
  };
  const handleStop = () => {
    //clear time interval using ref object
    clearInterval(timeIntervalRef.current);
  };
  let minutes = 0,
    seconds = 0;
  if (startTime != null && currentTime != null) {
    const duratonInMilliSeconds = currentTime - startTime;
    seconds = (duratonInMilliSeconds / 1000) % 60;
    minutes = Math.floor(duratonInMilliSeconds / (1000 * 60));
  }
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds.toFixed(2) : seconds.toFixed(2);
  return (
    <div>
      <h1 className="mx-2">
        {minutes}:{seconds}
      </h1>
      <div>
        <button className="btn btn-success me-2" onClick={handleStart}>
          Start
        </button>
        <button className="btn btn-danger" onClick={handleStop}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
