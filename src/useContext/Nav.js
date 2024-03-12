import React from "react";
import { useContext } from "react";
import GlobalTheme from "./ThemeContext";

const Nav = () => {
  const theme = useContext(GlobalTheme);
  const { setDark } = theme;
  return (
    <div style={{ height: "75px" }}>
      <button onClick={() => setDark((prev) => !prev)}>Apply Dark Theme</button>
    </div>
  );
};

export default Nav;
