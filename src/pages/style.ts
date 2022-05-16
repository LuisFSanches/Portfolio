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
    margin-bottom: 10rem;
    

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
    width: 55rem;
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
    justify-content: center;
    align-items: center;
    p{
        font-size: 1.3rem;
        line-height: 1.25;
        margin-bottom: 0.8rem;
    }
    img{
        width: 16rem;
        height: 18rem;
        padding: 1rem 0;
        border: 1px solid var(--gold-text);
        border-radius: 0.5rem;
        
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
interface ProjectContainer{
    changeSide: boolean
}
export const ProjectContainer = styled.div<ProjectContainer>`
    width: 65rem;
    display: flex;
    position: relative;
    margin-bottom: 15rem;
    
    img{
        max-width: 35rem;
        max-height: 30rem;
        margin-left: ${(props)=> props.changeSide
            ? '34rem'
            : '0rem'
        };
        position: absolute;
        z-index: 0;
    }
`

export const ProjectDescription = styled.div<ProjectContainer>`
    width: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-left: ${(props)=> props.changeSide
            ? '0rem'
            : '33rem'
        };
    z-index: 5;

   
    h2{
        margin: 1rem 0;
        text-align:${(props)=> props.changeSide
            ? 'start'
            : 'end'
        };
        font-size: 1.7rem;
        color: var(--gold-text);
    }
    .description{
        display: flex;
        text-align: justify;
        padding: 0.8rem;
        background: #403b3d;
        border-radius: 0.5rem;
    }
     p{
        margin: 1rem;
        line-height: 1.2;
        font-size: 1.2rem;
    }
`

export const TechsApplied = styled.div`
    width: 80%;
    margin-left: 3rem;
    margin-top: 1rem;
    ul{
        display: flex;
        justify-content: space-between;
    }
    li{
        font-size: 1.15rem;
        border-bottom: 1px solid var(--gold-text);
    }
`


