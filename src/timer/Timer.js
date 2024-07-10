import React, { useEffect } from "react";

const Timer = ({
  isActive,
  name,
  handleStart,
  handleStop,
  setTimers,
  seconds,
}) => {
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimers((prevTimers) =>
          prevTimers.map((item) =>
            item.name === name ? { ...item, seconds: item.seconds + 1 } : item
          )
        );
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, name, setTimers]);

  return (
    <div>
      <p>{name}</p>
      <h1>{seconds}</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={() => handleStart(name)}
          style={{ marginRight: "10px" }}
        >
          Start Timer
        </button>
        <button onClick={() => handleStop(name)}>Stop Timer</button>
      </div>
    </div>
  );
};

export default Timer;
