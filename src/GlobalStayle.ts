'use client'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;

    @media (max-width: 1200px) {
      font-size: 58%;
    }

    @media (max-width: 992px) {
      font-size: 55%;
    }

    @media (max-width: 768px) {
      font-size: 52%;
    }

    @media (max-width: 576px) {
      font-size: 50%;
    }
  }

  body {
    margin: 0;
    padding: 0;
    
    
    
    font-family: 'Montserrat', sans-serif;
    background-color: #111211;
    color: #333;
    line-height: 1.6;
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font-size: 1.6rem;
  }
`;

