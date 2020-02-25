import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    display: flex;
    font-family: Roboto;
    width: 100vw;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  #root {
    width: 100%;
  }
`;
