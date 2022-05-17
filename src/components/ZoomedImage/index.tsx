/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { LayoutContext } from "../../contexts/LayoutContext";
import { Container } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


export function ZoomedImage(){
    const {zoomedImage, showZoomedImage, handleCloseZoomedImage,handleCloseModals} = useContext(LayoutContext)
 



    return(
        <Container showImage={showZoomedImage} >
            <img src={zoomedImage as string} alt="" />
            <button onClick={handleCloseZoomedImage}><FontAwesomeIcon icon={faXmark}/></button>
        </Container>
    )
}