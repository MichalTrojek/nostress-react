import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --font-primary: 'Oswald', sans-serif;
        --color-primary: #ffffff;
        --color-secondary: #000000;
        --color-tertiary: #f2c48c;
        --color-quaternary: #6f6150;


        --max-width: 120rem;
        
    }

    

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
        font-size: 62.25%
    }

    body {
        > * {
        font-family: var(--font-primary);
        font-weight: 300;
        line-height: 1.6;
        font-size: 1.6rem;
        color: var(--color-primary);
        text-rendering: optimizeLegibility;
        } 
    }
`;
