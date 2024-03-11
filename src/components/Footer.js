import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  bottom: 0;
  min-height: 70px;
  background: papayawhip;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  position: relative;
`;

const Footer = () => {
  return <FooterContainer>@rahul4code</FooterContainer>;
};

export default Footer;
