import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  min-height: 100px;
  background: #2c3e50;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 18px;
`;

const Header = () => {
  return (
    <>
      <Link
        to="/"
        style={{
          position: "absolute",
          color: "gray",
          padding: "10px",
          fontSize: "10px",
        }}
      >
        Back to Dashboard
      </Link>
      <HeaderContainer>Keep Practicing</HeaderContainer>
    </>
  );
};

export default Header;
