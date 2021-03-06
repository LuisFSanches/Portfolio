/* eslint-disable react/display-name */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext} from "react";
import { Container, Resume, Sections, SideMenu } from "./style";
import { useScrollDirection } from "../../hooks/useScrollDirection"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { LayoutContext } from "../../contexts/LayoutContext";
import React from "react";

export function Header(){
   
    const {showOpenMenu, showCloseMenuButton, handleOpenMenu, handleCloseMenu} = useContext(LayoutContext)


    return(
        <Container showHeader={useScrollDirection()}>
            <Resume>
                <a href="/documents/curriculo.pdf" target="_blank" rel="noopener noreferrer">Currículo</a>
                
            </Resume>
            <Sections showMenu={showOpenMenu}>
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
            <SideMenu showHeader={useScrollDirection()}>
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
