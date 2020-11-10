import { FunctionComponent } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import typography from "./typography";
import utilities from "./utilities";
import media from "./media";



const GlobalStyle = () => (
  <ThemeProvider theme={{}}>
    <Style />
  </ThemeProvider>
);

export default GlobalStyle;

const Style = createGlobalStyle`
    :root{
        /* COLORS */
        --color-primary: #1A1A1A;
        --color-primary-trans-8: rgba(26,26,26,0.8);
        --color-secondary: #ffffff;
        --color-tertiary: #E8880B;
        --color-tertiary-light: #FFFBF6;
        --color-trans: rgba(0,0,0,0);
        --color-white-lesser: #FEFEFE;
        --color-white-dim: #929090;
        --color-white-dim-2: #E2E2E2;
        --color-danger: #bc1818;


        /*  SPACING*/
        --space-v: 4rem;
        --space-h: 5rem;

        ${media.phone`
            --space-h: 3rem;
        `}
    }

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        transition: all 300ms;
        box-sizing: border-box;
    }

    html { 
        font-size: 62.5%;   /* 1rem = 10px;  10px/16px;  = 62.5% */

        ${media.desktopMd`
            font-size: 62.5%;   /* 1rem = 10px;  10px/16px;  = 62.5% */
        `}

        ${media.tabletSm`
            font-size: 50%;  /* 1rem = 8px;  8px/16px;  = 50% */
        `}
        
    }

    body {
        width: 100vw;
        height: 100%;
        border: 0;
    }

    ${typography}
    ${utilities}
`;
