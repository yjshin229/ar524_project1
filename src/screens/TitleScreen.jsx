import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TitleScreen = () => {
  return (
    <StyledTitleContainer>
      <StyledTitle>
        Rejected: California's Controversial License Plate Applications
      </StyledTitle>
      <StyledNavigation>
        <StyledP to={"/info-graphic"}>{`Go See Data ->`}</StyledP>
      </StyledNavigation>
    </StyledTitleContainer>
  );
};

const StyledTitleContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const StyledTitle = styled.h1`
  color: white;
  text-align: center;
  text-transform: uppercase;
`;

const StyledNavigation = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
`;

const StyledP = styled(Link)`
  color: white;
  text-decoration: none;
  transition: 150ms;
  &:hover {
    font-size: large;
  }
`;
export default TitleScreen;
