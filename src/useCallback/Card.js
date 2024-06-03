import React, { useCallback, useState } from "react";
import List from "./List";

const Card = () => {
  const [number, setNumber] = useState(0);
  const [numberList, setNumberList] = useState([1, 2, 3]);

  // Now getItems function get memoized and not getting called/register on each render
  const memGetItems = useCallback(() => getItems(), [numberList]);

  // Earlier this was getting called if this(Parent) component gets re-render
  function getItems() {
    console.log("getItems is called");
    return numberList;
  }

  const handleAddNumber = () => {
    const newNumber = parseInt(number, 10);
    if (!isNaN(newNumber)) {
      setNumberList([...numberList, newNumber]);
      setNumber(0);
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter number to add"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleAddNumber}>Add</button>
      <p>Get the updated List</p>
      <List getItems={memGetItems} />
    </div>
  );
};

export default Card;
