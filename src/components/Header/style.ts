import styled from 'styled-components'

interface HeaderProps{
    showHeader:boolean;
}

interface MenuProps{
    showMenu: boolean
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

    a:hover{
        color: var(--gold-text);
    }
`
export const Sections = styled.div <MenuProps>`
    
    display: flex;

    .nav-button{
        width: 100%;
        text-align:center;
        font-size: 1.2rem;
        color: var(--text-body);
    }


    a{
        font-size: 1.2rem;
        color: var(--text-body);
    }

    a~a{
        margin-left: 2rem;
    }

    .nav-button:hover{
        color: var(--gold-text);
    }
    span{
        color: var(--gold-text);
    }

    @media (max-width:800px){
        display: ${(props)=>props.showMenu ? 'flex' : 'none'};
        height: 100vh;
        max-width: 20rem;
        width: 100%;
        flex-direction: column;
        align-items: center;
        text-align:right;
        justify-content: space-around;
        padding: 8rem 0;
        background: #403b3d;
        position: absolute;
        right: 0rem;
        top: 0rem;

        a{
            width: 100%;
            text-align:center;
            font-size: 1.2rem;
        }

        a~a{
            margin-left: 0rem;
        }
    }

    @media (max-width:420px){
        max-width: 15rem;
    }
`

export const SideMenu = styled.div <HeaderProps>`

    display: none;

    .header-button{
        display: ${(props)=> props.showHeader ? 'flex' : 'none'};
        color:var(--gold-text);
        font-size:1.5rem
    }
    @media (max-width:800px){
        display: flex;
        position: absolute;
        right: 1rem;
        top: 0.8rem;

    }
`