import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors["text-dark"]};
        -webkit-font-smoothing: antialiased;
    }
    
    button{
        cursor: pointer;
        border: 0;
        background:none;
    }
    a{
        text-decoration:none;
    }
    ul{
        list-style:none
    }
   
`;
