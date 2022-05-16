/* eslint-disable @next/next/no-img-element */
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SocialMediaSideBar } from "../components/SocialMediaSideBar";
import { Description, ImageContainer, Introduction, Main, MySkills, ProjectContainer, ProjectDescription, Section, Skill, TechsApplied } from "./style";

export default function Home() {
  return (
    <>
      <Header/>
      <SocialMediaSideBar/>
      <Main>
        <Introduction id="introducao">
          <p className="gold-text">Olá, me chamo</p>
          <h1>Luis Felipe Sanches</h1>
          <h2>Desenvolvedor FullStack.</h2>
          <p> Sou um Engenheiro Projetista que decidiu seguir um sonho antigo e se tornar um desenvolvedor de software. 
            Atualmente estou focado em estudar tecnologias que abrangem tanto o backend como o frontend. </p>
        </Introduction>

        <Section id="sobremim">
          <div className="title">
            <p className="gold-text">01. </p>
            <h1>Sobre mim</h1>
          </div>

            <Description>
              <div className="description-text">
                  <p>Olá, meu nome é Luis Felipe, atuei por mais de dois anos como Engenheiro Projetista, principalmente na área de <a href="https://grabcad.com/luis.felipe.sanches-1/models" target="_blank" rel="noopener noreferrer" className="gold-text">projetos</a> e análises envolvendo segurança de máquinas e equipamentos. </p>
                  <p>Gosto muito de aprender e me atualizar, sempre busco entregar o melhor possível, me atentando a pequenos detalhes. Essa é uma característica que desenvolvi ainda como projetista. </p>
                  <p>Atualmente tenho feito pequenos projetos como freelancer, mas sigo em busca de uma oportunidade de ingressar no mercado e enfrentar novos desafios como desenvolvedor.</p>
              </div>

              <img src='/images/avatar.png' alt="" />
            </Description>
          
        </Section>

        <Section id="skills">
          <div className="title">
            <p className="gold-text">02. </p>
            <h1>Skills</h1>
          </div>
          <Description>
            <p>Atualmente estas são as tecnologias que venho utilizando.</p>
          </Description>

          <MySkills>
          <Skill>
              <img src="/images/html.png" alt="" />
              <p>HTML</p>
            </Skill>

            <Skill>
              <img src="/images/css.png" alt="" />
              <p>CSS</p>
            </Skill>

            <Skill>
              <img src="/images/js.png" alt="" />
              <p>JavaScript</p>
            </Skill>

            <Skill>
              <img src="/images/react.png" alt="" />
              <p>React</p>
            </Skill>

            <Skill>
              <img src="/images/node.png" alt="" />
              <p>Node.js</p>
            </Skill>

            <Skill>
              <img src="/images/typescript.png" alt="" />
              <p>Typescript</p>
            </Skill>

            <Skill>
              <img src="/images/styledcomponent.png" alt="" />
              <p>StyledComponents</p>
            </Skill>

            <Skill>
              <img src="/images/firebase.png" alt="" />
              <p>Firebase</p>
            </Skill>

            <Skill>
              <img src="/images/redux.svg" alt="" />
              <p>Redux</p>
            </Skill>

            <Skill>
              <img src="/images/flutter.png" alt="" />
              <p>Flutter</p>
            </Skill>

            <Skill>
              <img src="/images/visualStudio.svg" alt="" />
              <p>Visual Studio</p>
            </Skill>
          </MySkills>
        </Section>
        <Section id="meustrabalhos">
          <div className="title">
            <p className="gold-text">03. </p>
            <h1>Meus Trabalhos</h1>
          </div>
          <ProjectContainer changeSide={false}>
            
            <ImageContainer>
              <img src="/images/projeto-mais-vida.png" alt="" />
            </ImageContainer>

            <ProjectDescription changeSide={false}>
              <h2>Gerador de Documentação</h2>
              <div className="description">
                <p>Aplicação para geração de diferentes documentos partindo de um formulário inicial. A aplicação foi
                 destinada a uma empresa de saúde e segurança do trabalho.</p>
              </div>

              <TechsApplied>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Electron</li>
                    <li>Node.js</li>
                  </ul>
              </TechsApplied>
            </ProjectDescription>
          </ProjectContainer>

          <ProjectContainer changeSide={true}>
          <ProjectDescription changeSide={true}>
              <h2>Formulário de Delivery</h2>
              <div className="description">
                <p>Aplicação web integrada a API do google para salvamento do formulário diretamente
                  no Drive, em formato PDF com layout ajustado conforme pedido pelo cliente.</p>
              </div>

              <TechsApplied>
                  <ul>
                    <li>React</li>
                    <li>Javascript</li>
                    <li>Node.js</li>
                    <li>Css</li>
                  </ul>
              </TechsApplied>
            </ProjectDescription>

              <ImageContainer>
                <img src="/images/projeto-formulario-mirai.png" alt="" />
              </ImageContainer>
            
          </ProjectContainer>
        </Section>

        <Section id="contato">
          <div className="title">
              <p className="gold-text">04. </p>
              <h1>Entre em Contato</h1>
          </div>
          <ContactForm/>        
        </Section>

        <Footer/>

        
      </Main>
    </>
 
  )
}
