import * as S from "styled-components";

export const GlobalStyle = S.createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  box-sizing: border-box;
}

body {
  background-color: ${props => props.theme["gray-700"]};
  -webkit-font-smoothing: antialiased;
}

body,
input,
textarea,
button {
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  line-height: 140%;
}

:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);
  }
`;
