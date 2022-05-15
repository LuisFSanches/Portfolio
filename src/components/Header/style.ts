import styled from 'styled-components'

interface HeaderProps{
    showHeader:boolean;

}
export const Container = styled.div<HeaderProps>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 3rem;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #161616;
    transition: all .4s ease;
    opacity: ${(props)=>props.showHeader
        ? '1'
        : '0'
    };



`
export const Resume = styled.div`
    padding: 0.7rem;
    border: 1px solid var(--gold-text);
    border-radius: 0.3rem;
    color: var(--gold-text);
`
export const Sections = styled.div`
    a{
        font-size: 1.2rem;
    }
    a~a{
        margin-left: 2rem;
    }
    a:hover{
        color: var(--gold-text);
    }
    span{
        color: var(--gold-text);
    }
`