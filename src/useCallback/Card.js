import React, { useCallback, useState } from "react";
import List from "./List";

const Card = () => {
  const [number, setNumber] = useState(0);
  const [numberList, setNumberList] = useState([1, 2, 3]);

  const getItems = useCallback(() => {
    return numberList;
  }, [numberList]);

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
      <List getItems={getItems} />
    </div>
  );
};

export default Card;
