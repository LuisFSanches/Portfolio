import styled from "styled-components";


export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    
`
export const Introduction = styled.section`
    max-width: 50rem;
    display: flex;
    flex-direction: column;
    margin-right: 5rem;
    margin-top:7rem;
    margin-bottom: 20rem;
    

    h1{
        font-size:6rem;
    }
    h2{
        font-size: 4.5rem;
    }

    p{  
        width: 35rem;
        font-size: 1.2rem;
        line-height: 1.5;
        text-align: justify;
        margin-top: 1rem;
    }
`

export const Section= styled.section`
    width: 50rem;
    display: flex;
    flex-direction: column;
    margin-right: 5rem;
    margin-top:12rem;

    p{
            font-size: 1.3rem;
    }

    .title{
        display: flex;
        justify-content: initial;
        align-items: center;
        margin-bottom: 1.7rem;

        p{
            margin-right: 0.6rem;
        }

        h1{
            font-size: 1.6rem;
        }
    }
`

export const Description = styled.div`
    display: flex;
    p{
        font-size: 1.3rem;
        line-height: 1.25;
        margin-bottom: 0.8rem;
    }
    img{
        height: 15rem;
    }

`

export const MySkills = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    margin-top:2rem;
    img{
        max-width: 5rem;
        max-height: 5.5rem;
    }
`

