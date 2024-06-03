import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(getItems());
  }, [getItems]);

  console.log("Child renders");

  return (
    <ul>
      {list.map((i) => (
        <li key={i + Math.random()}>{i}</li>
      ))}
    </ul>
  );
};

export default List;
