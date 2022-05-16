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
    p, a,li{
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
    ul{
        display: flex;
    }
    li{
        list-style: none;
    }

    input, textarea{
        
        outline: none;
        padding: 1rem;
        font-size:1.2rem;
        background:#625c5e ;
        border-radius: 0.5rem;
        color:var(--gold-text)
    }
    ::placeholder{
        font-size:1.2rem;
        color:var(--gold-text)
    }

    .gold-text{
        color: var(--gold-text);
        font-weight: bold;
    }

    button{
        padding: 0.8rem;
        border: none;
        border-radius: 0.5rem;
        background: var(--gold-text);
        color: var(--text-title);
        font-family: 'Roboto', sans-serif;
        font-size:1.3rem;
        cursor: pointer;
    }

    @media screen and (max-width: 320px) {
        #__next {
            display: flex
        }
    }

`