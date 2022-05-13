import { Container, Resume, Sections } from "./style";

export function Header(){
    return(
        <Container>
            <Resume>
                <p>Currículo</p>
            </Resume>

            <Sections>
                <a href="#">
                    <span>01-</span>
                    Sobre mim
                </a>

                <a href="#">
                    <span>02-</span>
                    Skills
                </a>

                <a href="#">
                    <span>03-</span>
                    Trabalhos
                </a>

                <a href="#">
                    <span>04-</span>
                    Contato
                </a>
            </Sections>
        </Container>
    )
}