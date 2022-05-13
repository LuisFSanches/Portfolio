import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 3rem;
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