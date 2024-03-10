import React, { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(getItems());
    console.log("getItems Called");
  }, [getItems]);

  return (
    <ul>
      {list.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
};

export default List;
