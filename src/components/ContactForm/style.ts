import styled from 'styled-components'
export const FormContainer = styled.form`
 width: 100%;
    display: flex;
    flex-direction: column;

    .form-row{
        width: 100%;
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
        margin-bottom: 1.2rem;
    }

    button{
        width: 15rem;
    }
`