import React, { useState } from "react";
import Card from "./Card";
import GlobalTheme from "./ThemeContext";
import Nav from "./Nav";
import styled from "styled-components";

const StyledDarkContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background: black;
  color: white;
`;

const StyledLightContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background: white;
  color: black;
`;

const Container = () => {
  const [dark, setDark] = useState(false);

  return (
    <GlobalTheme.Provider value={{ dark, setDark }}>
      <Nav />
      {dark ? (
        <StyledDarkContainer>
          <Card />
        </StyledDarkContainer>
      ) : (
        <StyledLightContainer>
          <Card />
        </StyledLightContainer>
      )}
    </GlobalTheme.Provider>
  );
};

export default Container;
