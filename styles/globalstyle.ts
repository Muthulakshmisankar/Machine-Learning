import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    @media screen and (max-width: 1500px) {
      font-size: 55%;
    }
    @media screen and (max-width: 1100px) {
      font-size: 45%;
    }
    @media screen and (max-width: 900px) {
      font-size: 40%;
    }
    @media screen and (max-width: 768px) {
      font-size: 50%;
    }
  }
  
  body {
    margin: 0;
    padding: 0;
    background: ${({theme}) => theme.colors.primary };
   font-family: 'Outfit';

    color: ${({ theme }) => theme.colors.fontprimary};
  }
  .planetX{
    overflow: auto;
  }
`;

export default GlobalStyle;