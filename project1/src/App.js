import logo from "./logo.svg";
import styled, { createGlobalStyle } from "styled-components";
import "./App.css";
import CharlesWright from "./assets/fonts/CharlesWright.ttf";

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
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </StyledAppContainer>
  );
}

const StyledAppContainer = styled.div`
  background-color: #6b6b6b;
  height: 100vh;
  font-family: "CharlesWright";
`;

export default App;
