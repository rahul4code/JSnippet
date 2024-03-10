import React, { useCallback, useState } from "react";
import List from "./List";

const Card = () => {
  const [number, setNumber] = useState(0);
  const [numberList, setNumberList] = useState([1, 2, 3]);

  const getItems = useCallback(() => {
    return numberList;
  }, [numberList]);

  return (
    <div>
      <input
        type="number"
        placeholder="Enter number to add"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={(e) => setNumberList([...numberList, number])}>
        Add
      </button>
      <p>Get the updated List</p>
      <List getItems={getItems} />
    </div>
  );
};

export default Card;
