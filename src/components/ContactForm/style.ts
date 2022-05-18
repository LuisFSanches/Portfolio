import styled from 'styled-components'

export const Container = styled.div`
    width: 58rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-left: 2rem;

    h1{
        margin-bottom: 0.8rem;
    }

    @media (max-width:780px){
        width: 100%; 
        margin: 0 auto;
    }

   
`

export const FormContainer = styled.form`
    width: 55rem;
    display: flex;
    flex-direction: column;
 
    textarea{
        width: 100%;
        margin-bottom: 0.8rem;
    }

    button{
        width: 15rem;
        margin-top: 0.3rem;
    }

    .error-message{
        color: #f74e4e;
        margin-bottom: 0.3rem;
    }

    @media (max-width:840px){
        width: 90vw; 
    }

    @media (max-width: 780px){
        margin-left: 2rem;
    }

   
   
`

export const InputContainer = styled.div`
        width: 55rem;
        display: flex;

     .form-row{
        width:90%;
        display: flex;
        flex-direction: column;
        padding: 0;
    }

    input{
        width: 100%;
        margin-bottom: 0.8rem;
    }
    .left{
        width: calc(100% - 1rem);
        margin-left: 1rem;
    }

    @media (max-width:840px){
        width: 90vw; 
    }

    @media (max-width:540px){
        width: 100%;
        flex-direction: column;

        .form-row{
            width: 100%;
        }
  
        .left{
            width:100%;
            margin-left: 0;
        }
    }

   
`