import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --color-primary: #ffffff;
        --color-secondary: #000000;
        --color-tertiary: #f2c48c;
        --color-quaternary: #6f6150;
        --max-width: 140rem;
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

    html, body{
      height:100%;
    }

  

    body {
      > * {
        font-family: 'Open Sans Condensed', sans-serif;
        color: var(--color-primary);
        text-rendering: optimizeLegibility;
      }
    } 


    h1,
    h2,
    h3,
    h4 {
      color: var(--color-primary);
    }


    

    @media only screen and (min-width: 320px) {
      h1 {
        font-size: 2rem;
      }

      p,
      li,a, label {
        font-size: 1.5rem;
      }
    }

    @media only screen and (min-width: 360px) {
      h1 {
        font-size: 2.6rem;
      }
      h2 {
        font-size: 1.8rem;
      }


      p,
      li,a, label {
        font-size: 1.7rem;
      }
    }

    @media only screen and (min-width: 411px) {
      h1 {
        font-size: 2.8rem;
      }

      h2 {
        font-size: 2rem;
      }


      p,
      li,a, label {
        font-size: 1.9rem;
      }
    }

    @media only screen and (min-width: 768px) {
      h1 {
        font-size: 4rem;
      }

      h2 {
        font-size: 2.5rem;
      }

      p,
      li,a, label {
        font-size: 2.2rem;
      }
    }

    @media only screen and (min-width: 1024px) {
      h1 {
        font-size: 7rem;
      }
      h2 {
        font-size: 3rem;
      }


      p,
      li,a, label {
        font-size: 2.4rem;
      }
    }

`;
