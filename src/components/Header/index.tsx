/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Container, Resume, Sections, SideMenu } from "./style";
import { useScrollDirection } from "react-use-scroll-direction"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export function Header(){
    const [showHeader, setShowHeader] = useState(true)
    const { isScrollingUp, isScrollingDown } = useScrollDirection()

    const [showOpenMenu, setOpenMenu] = useState(false)
    const [showCloseMenuButton, setShowCloseMenuButton] = useState(false)

    function handleShowScroll(){
        if(isScrollingDown){
            setShowHeader(false)
        } else if(isScrollingUp){
            setShowHeader(true)
        }
    }

    function handleOpenMenu(){
        setOpenMenu(true)
        setShowCloseMenuButton(true)
    }

    function handleCloseMenu(){
        setOpenMenu(false)
        setShowCloseMenuButton(false)
    }
    
    useEffect(()=>{
        handleShowScroll()
    },[isScrollingDown || isScrollingUp])
   
    return(
        <Container showHeader={showHeader} >
            <Resume>
                <a href="/documents/curriculo.pdf" target="_blank" rel="noopener noreferrer">Currículo</a>
                
            </Resume>
            <Sections showMenu={showOpenMenu}>
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
            <SideMenu>
                {showCloseMenuButton
                    ? <button className="header-button" onClick={handleCloseMenu}>
                        <FontAwesomeIcon icon={faXmark}/>
                     </button>
                    : <button className="header-button" onClick={handleOpenMenu}>
                        <FontAwesomeIcon icon={faBars}/>
                      </button>
                }
            </SideMenu>
        </Container>
    )
}