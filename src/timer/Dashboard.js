import React, { useState } from "react";
import Timer from "./Timer.js";

const Dashboard = () => {
  const [timers, setTimers] = useState([
    { isActive: true, name: "timer0", seconds: 0 },
    { isActive: true, name: "timer1", seconds: 0 },
    { isActive: false, name: "timer2", seconds: 0 },
  ]);

  const handleAdd = () => {
    setTimers((timer) => [
      ...timer,
      {
        name: `timer${timer.length}`,
        isActive: true,
        seconds: 0,
      },
    ]);
  };

  const handleRemove = () => {
    const timerData = timers.slice(0, timers.length - 1);
    setTimers(timerData);
  };

  const handleStartAll = () => {
    const activeTimers = timers.map((item) => {
      return { ...item, isActive: true };
    });
    setTimers(activeTimers);
  };

  const handleStopAll = () => {
    const activeTimers = timers.map((item) => {
      return { ...item, isActive: false };
    });
    setTimers(activeTimers);
  };

  const handleStart = (name) => {
    const updatedTimers = timers.map((item) => {
      if (item.name === name) {
        return { ...item, isActive: true };
      } else {
        return item;
      }
    });
    setTimers(updatedTimers);
  };

  const handleStop = (name) => {
    const updatedTimers = timers.map((item) => {
      if (item.name === name) {
        return { ...item, isActive: false };
      } else {
        return item;
      }
    });
    setTimers(updatedTimers);
  };

  const resetAll = () => {
    const updatedTimers = timers.map((item) => {
      return { ...item, seconds: 0, isActive: false };
    });
    setTimers(updatedTimers);
  };

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={handleStartAll}>Start All</button>
      <button onClick={handleStopAll}>Stop All</button>
      <button onClick={resetAll}>Reset All</button>

      <div>
        <ul style={{ display: "flex", justifyContent: "space-between" }}>
          {timers.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid green",
                padding: "10px",
                margin: "5%",
              }}
            >
              <Timer
                {...item}
                setTimers={setTimers}
                handleStart={handleStart}
                handleStop={handleStop}
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
