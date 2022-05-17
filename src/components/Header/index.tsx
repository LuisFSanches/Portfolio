/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Container, Resume, Sections, SideMenu } from "./style";
import { useScrollDirection } from "react-use-scroll-direction"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { LayoutContext } from "../../contexts/LayoutContext";




export function Header(){
    const [showHeader, setShowHeader] = useState(true)
    const { isScrollingUp, isScrollingDown } = useScrollDirection()

    const {showOpenMenu, showCloseMenuButton, handleOpenMenu, handleCloseMenu, handleCloseModals} = useContext(LayoutContext)



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
                <a href="/documents/curriculo.pdf" target="_blank" rel="noopener noreferrer">Currículo</a>
                
            </Resume>
            <Sections showMenu={showOpenMenu} >
                <a href="#introducao">
                    <button className="nav-button" onClick={handleCloseMenu}>
                        <span>01.</span>
                        Sobre mim
                    </button>
                </a>

                <a href="#skills">
                    <button className="nav-button" onClick={handleCloseMenu}>
                        <span>02.</span>
                        Skills
                    </button>
                    
                </a>

                <a href="#meustrabalhos">
                    <button className="nav-button" onClick={handleCloseMenu}>
                        <span>03.</span>
                        Trabalhos
                    </button>
                </a>

                <a href="#contato">
                    <button className="nav-button" onClick={handleCloseMenu}>
                        <span>04.</span>
                        Contato
                    </button>
                </a>
            </Sections>
            <SideMenu showHeader={showHeader}>
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