import styled, { keyframes } from "styled-components";

interface MainProps{
    overlay: boolean
}

export const Main = styled.main<MainProps>`
    width: 100%; 
    overflow-y:hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    overflow-y:hidden;
    overflow-x: hidden;
    filter: ${(props)=> props.overlay ? 'brightness(50%)' : 'brightness(100%)'};
`

export const Introduction = styled.section`
    max-width: 99vw;
    display: flex;
    flex-direction: column;
    margin-right: 5rem;
    margin-top:7rem;
    margin-bottom: 8rem;

    h1{
        font-size:6rem;
    }
    h2{
        font-size: 4.5rem;
    }

    p{  
        max-width: 100%;
        width: 35rem;
        font-size: 1.2rem;
        line-height: 1.5;
        text-align: justify;
        margin-top: 1rem;
    }

    @media (max-width:950px){
        justify-content: center;
        margin-right: 0;
        h1{
            font-size: 5rem;
        }
        h2{
            font-size: 4rem;
        }
    }

    @media (max-width:720px){
        h1{
            font-size: 4.5rem;
        }
        h2{
            font-size: 3.5rem;
        }
    }

    @media (max-width:630px){
        h1{
            font-size: 3.8rem;
        }
        h2{
            font-size: 2.8rem;
        }
    }

    @media (max-width:420px){
        padding: 0 1rem;
        margin-bottom: 8.8rem;
        p{
            margin-bottom: 1rem;
        }
        h1{
            font-size: 3.1rem;
        }
        h2{
            font-size: 2.6rem;
        }
    }
`

export const Section= styled.section`
    max-width: 55rem;
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

        @media (max-width:780px){
            width: 100vw;
            padding: 0 2rem;
        }
    }


    @media (max-width:950px){
        justify-content: center;
        margin: 0 auto;
        margin-top:12rem;
    }
    
`

export const Description = styled.div`
    display: flex;
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

    @media (max-width:780px){
        flex-direction: column;
        padding: 0 1.3rem;
        
        p{
            width: 100%;
            text-align:justify;

        }
    }

`

export const MySkills = styled.div`
    width: 55rem;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (max-width:780px){
        width: 100%;
        grid-template-columns: 1fr 1fr 1fr;
        align-self: center;
        justify-self: center;
    }

    @media (max-width:750px){
        grid-template-columns: 1fr 1fr ;
        justify-items: center;
        align-self: center;
        justify-self: center;
    }
`

export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    margin-top:2rem;
    transition: transform .3s;

    img{
        max-width: 5rem;
        max-height: 5.5rem;
    }

    img:hover{
        transform: scale(1.2);
    }
`
interface ProjectContainer{
    changeSide: boolean
}


export const ProjectContainer = styled.div<ProjectContainer>`
    width: 100%;
    display: flex;
    position: relative;
    margin-bottom: 4rem;

    @media (max-width:780px){
        width: 90vw;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-bottom: 4rem;
        
    }
`

export const ImageContainer = styled.div`
    max-width: 42vw;
    max-height: 40vh;
    position: relative;

    img{
        max-width: inherit;
        max-height: inherit;
        height: inherit;
        width: inherit;
        object-fit: cover;
        filter: brightness(100%);
    }


    span{
        width: 100%;
        display: none;
        justify-content: center;
        margin: 0 auto;
        font-size: 2.2rem;
        color: #b7b7b7;
        position: absolute;
        top: 40%;
        z-index: 2;  
    }

    &:hover{
        filter: brightness(70%);
        cursor: pointer;

        span{
            display: flex;
        }
    }

    @media (max-width:780px){
        max-width: 99%;
        width: 80vw;
        height: 100%;
        display: flex;
        justify-content: center;
    }
`

export const ProjectDescription = styled.div<ProjectContainer>`
    width:39vw;
    margin-left: ${(props)=>props.changeSide
        ? '0'
        :'1rem'
    };
    margin-right: ${(props)=>props.changeSide
        ? '1rem'
        :'0'
    };
    z-index:5;

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

    @media (max-width:780px){
        width: 90%;
        height: 100%;
        margin:0;
        position: absolute;
        background: #403b3d;
        opacity: 0.88;

        h2{
            font-size: 1.4rem;
            text-align:center
        }

        p{
            margin: 0;
        }
    }

`



export const TechsApplied = styled.div`
    width: 90%;
    margin-left: 1rem;
    margin-top: 1rem;
    ul{
        display: flex;
        justify-content: space-between;
    }
    li{
        font-size: 1.15rem;
        border-bottom: 1px solid var(--gold-text);
    }

    @media (max-width:780px){
        width: 95%;
        margin: 0;
        margin-top: 1rem;
        
        ul{
            justify-content: center;
            align-items: center;    
        }

        li{
            max-width: 95%;
            margin-left: 1rem;
            font-size: 1rem;
        } 
    }
`
export const ProjectLink = styled.div`
    width: 90%;
    margin-left: 1rem;
    margin-top: 1rem;

    a{
        font-size: 1.2rem;
    }
    a:hover{
        color: var(--gold-text);
    }
`


