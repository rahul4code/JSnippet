import React, { useMemo, useState } from "react";

const ThemeNumber = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //   const doubleNumber = slowFunction(number); // Render Time is taking time even I am just clicking on Change Theme
  const doubleNumber = useMemo(() => slowFunction(number), [number]); // Now this will only get call if the number gets change and so
  //   the console or reder time of this compoenent will be faster

  // const theme = dark
  //   ? { background: "black", color: "white" }
  //   : { background: "white", color: "black" };

  //another use case of useMemo
  const theme = useMemo(() => {
    return dark
      ? { background: "black", color: "white" }
      : { background: "white", color: "black" };
  }, [dark]);

  function slowFunction(number) {
    for (let i = 0; i < 1000000000; i++) {}
    return number * 2;
  }

  console.log("Render Time");
  return (
    <div>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => setDark((prevTheme) => !prevTheme)}>
        Change Theme
      </button>
      <div style={theme}>{doubleNumber}</div>
    </div>
  );
};

export default ThemeNumber;
