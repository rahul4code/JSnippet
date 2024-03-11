import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  height: 200px;
  width: 200px;
  border: 1px solid gray;
`;

const Card = () => {
  return (
    <StyledCard>
      <p>This is my card content</p>
    </StyledCard>
  );
};

export default Card;
