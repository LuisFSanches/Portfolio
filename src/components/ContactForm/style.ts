import styled from 'styled-components'

export const FormContainer = styled.form`
    width: 58rem;
    display: flex;
    flex-direction: column;

    .form-row{
        width: 90%;
        display: flex;
        justify-content:space-around;
    }
    input{
        width: 50%;
        margin-bottom: 1.2rem;
    }
    input:last-child{
        margin-left: 1.3rem;
    }
    textarea{
        width:90%;
        margin-bottom: 1.2rem;
    }

    button{
        width: 15rem;
    }

    @media (max-width:780px){
        margin-left: 2rem;
        width: 46rem;
    }

    @media (max-width: 640px){
        width: 43rem;
    }
    @media (max-width:540px){
        width: 90%;
        .form-row{
           flex-direction: column;
       }

    }
       input{
           width: 100%;
       }
       input:last-child{
        margin-left: 0;
    }
    
   
`