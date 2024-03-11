import React from "react";
import { useContext } from "react";
import Card from "./Card";

const Container = () => {
  const getContext = useContext("GlobalTheme");
  console.log(getContext, "getContext");

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <Card />
    </div>
  );
};

export default Container;
