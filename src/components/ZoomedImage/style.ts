import styled from 'styled-components'

interface ZoomedImageProps{
    showImage: boolean
}

export const Container = styled.div<ZoomedImageProps>`
    max-width: 10%;
    display: ${(props)=> props.showImage ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    margin: 0 auto;
 
    position: fixed;
    left:0;
    right:0;
    bottom: 0;
    top: 0;
    z-index: 6;

    img{
        width: inherit;
    }

    button{
        font-size: 2.2rem;
        color: var(--gold-text);
        position: fixed;
        top: 80px;
        right: 0;
        margin-right: 3rem;
    }

`