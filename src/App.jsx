import styled, { createGlobalStyle } from "styled-components";
import CharlesWright from "./assets/fonts/CharlesWright.ttf";
import { Route, Routes } from "react-router-dom";
import { InfoGraphicsScreen, TitleScreen } from "./screens";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "CharlesWright" ;
    src: url(${CharlesWright}) format('truetype');
  }
`;

function App() {
  return (
    <StyledAppContainer>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<TitleScreen />} />
        <Route path="/info-graphic" element={<InfoGraphicsScreen />} />
      </Routes>
    </StyledAppContainer>
  );
}

const StyledAppContainer = styled.div`
  background-color: black;
  height: 100vh;
  font-family: "CharlesWright";
  display: flex;
`;

export default App;
