import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Container } from "./style";

export function SocialMediaSideBar(){
   return(
       <Container>
            <ul>
                <li><a href="https://github.com/LuisFSanches" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a></li>
                <li><a href="https://www.linkedin.com/in/luisfsanches/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                <li><a href="https://www.instagram.com/luiisfelip/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a></li>
            </ul>
            <p>luissanches.eng@gmail.com </p>
       </Container>
       
   )
}