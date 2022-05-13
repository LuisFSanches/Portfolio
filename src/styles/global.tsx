import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #191919;
        --text-title: #fcfcfc;
        --text-body:#bcbcbc;
        --gold-text: #CCAC00;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: var(--background);
    }

    html{
         @media(max-width: 1080px){
            font-size: 93.75%; // 15px
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    a{
        text-decoration: none;
    }
    p, a{
        font-family: 'Roboto', sans-serif;
        color: var( --text-body);
    }

    h1{
        color: var(--text-title);
        font-family: 'Francois One', sans-serif;
    }
    h2{
        font-family: 'Francois One', sans-serif;
        color: var(--text-body);
    }

    .gold-text{
        color: var(--gold-text);
        font-weight: bold;
    }

`