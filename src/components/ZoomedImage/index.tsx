/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { LayoutContext } from "../../contexts/LayoutContext";
import { Container } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export function ZoomedImage(){
    const {zoomedImage, showZoomedImage, handleCloseZoomedImage} = useContext(LayoutContext)

    return(
        <Container showImage={showZoomedImage}>
            <img src={zoomedImage as string} alt="" />
            <button onClick={handleCloseZoomedImage}><FontAwesomeIcon icon={faXmark}/></button>
        </Container>
    )
}
