import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
      
        --color-primary: #ffffff;
        --color-secondary: #000000;
        --color-tertiary: #f2c48c;
        --color-quaternary: #6f6150;


        --max-width: 120rem;
        
    }

      /* @media only screen and (min-width: 411px) {
      font-size: 2.7rem;
    } */

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
       
    }

    html{
        font-size: 62.25%;
    }

  

    body {
        > * {
        font-family: 'Open Sans Condensed', sans-serif;
        color: var(--color-primary);
        text-rendering: optimizeLegibility;


        
       
        } 
    }
`;
