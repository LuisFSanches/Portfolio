import styled from 'styled-components'

export const Container = styled.div`
    height: 10rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: fixed;
    right:0;
    bottom: 50%;
    margin-right: 3rem;


    ul{
        display: flex;
        flex-direction: column;
    }
    li{
        font-size: 2.5rem;
        
    }
   li{
    margin-bottom: 1.5rem;
   }
    li:last-child{
        margin-bottom: 1rem;
    }
    a:hover{
        color: var(--gold-text);
    }

    p{
        font-size: 1.2rem;
        position: fixed;
        transform: rotate(90deg);
        bottom: 28%;
    }
    p:after{

        white-space: pre;
        content: "        _____________";
        position: absolute;
        bottom: 20%;
        left: 100%;
       
    }
`