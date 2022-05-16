import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright} from "@fortawesome/free-solid-svg-icons";



import { Container } from "./style";

export function Footer(){
    return(
        <Container>
            <p>Desenvolvido por Luis Felipe Sanches</p>
            <div className="copy-right">
                <p><FontAwesomeIcon icon={faCopyright}/></p>
                <p>Todos os direitos reservados 2022</p>
            </div>
        </Container>
    )
}