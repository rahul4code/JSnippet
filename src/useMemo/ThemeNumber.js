import { useMemo, useState } from "react";

const ThemeNumber = () => {
  const [numList, setNumList] = useState([1, 2, 3, 4, 5]);
  const [number, setNumber] = useState(0);

  // Earlier this function get called on every render example on change of number in input box
  function getSum() {
    // This is a heavy operation
    for (let i = 0; i < 1000000000; i++) {}
    console.log("I am called");
    return numList.reduce((acc, curr) => (acc += curr), 0);
  }

  // After memoizing this now this will only get called if the list changes
  const sum = useMemo(() => getSum(), [numList]);

  const reCalculateSum = () => {
    if (numList.includes(number)) {
      alert("Already Exist");
    } else {
      setNumList([...numList, number]);
    }
  };

  return (
    <>
      <ul>
        {numList.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <div style={{ paddingLeft: "2%" }}>
        <input
          placeholder="Enter unique number"
          type="number"
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <button onClick={() => reCalculateSum()}>Add Number</button>
        {/* Memoized value used instead of directly calling the getSum() function */}
        <p>Sum of all the numbers are: {sum}</p>
      </div>
    </>
  );
};

export default ThemeNumber;
