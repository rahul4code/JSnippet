import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  min-height: 100px;
  background: papayawhip;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 18px;
`;

const Header = () => {
  return <HeaderContainer>Keep Practicing</HeaderContainer>;
};

export default Header;
