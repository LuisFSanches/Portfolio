/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Container, Resume, Sections } from "./style";
import { useScrollDirection } from "react-use-scroll-direction"

export function Header(){
    const [showHeader, setShowHeader] = useState(true)
    const { isScrollingUp, isScrollingDown } = useScrollDirection()

    function handleShowScroll(){
        if(isScrollingDown){
            setShowHeader(false)
        } else if(isScrollingUp){
            setShowHeader(true)
        }
    }
    
    useEffect(()=>{
        handleShowScroll()
    },[isScrollingDown || isScrollingUp])
   
    return(
        <Container showHeader={showHeader} >
            <Resume>
                <p>Currículo</p>
                
            </Resume>
            <Sections>
                <a href="#introducao">
                    <span>01-</span>
                    Sobre mim
                </a>

                <a href="#skills">
                    <span>02-</span>
                    Skills
                </a>

                <a href="#meustrabalhos">
                    <span>03-</span>
                    Trabalhos
                </a>

                <a href="#contato">
                    <span>04-</span>
                    Contato
                </a>
            </Sections>
        </Container>
    )
}