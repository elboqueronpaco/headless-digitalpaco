import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    }
    *, *::after, *::before {
        box-sizing: inherit; 
        margin: 0;
        padding: 0;
    }

`
export const Main = styled.main`
    margin-top: 7rem;
`