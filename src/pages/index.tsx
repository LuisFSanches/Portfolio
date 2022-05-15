/* eslint-disable @next/next/no-img-element */
import { Header } from "../components/Header";
import { SocialMediaSideBar } from "../components/SocialMediaSideBar";
import { ContactForm, Description, Introduction, Main, MySkills, ProjectContainer, ProjectDescription, Section, Skill, TechsApplied } from "./style";

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
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries </p>
        </Introduction>

        <Section id="sobremim">
          <div className="title">
            <p className="gold-text">01. </p>
            <h1>Sobre mim</h1>
          </div>

            <Description>
              <div className="description-text">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown </p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown </p>
                  <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p>
              </div>

              <img src='/images/avatar.png' alt="" />
            </Description>
          
        </Section>

        <Section id="skills">
          <div className="title">
            <p className="gold-text">02. </p>
            <h1>Skills</h1>
          </div>

          <p>Atualmente estas são as tecnologias que venho utilizando.</p>

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
            <img src="/images/projeto-mais-vida.png" alt="" />
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

            <img src="/images/projeto-formulario-mirai.png" alt="" />
            
          </ProjectContainer>
        </Section>

        <Section id="contato">
          <div className="title">
              <p className="gold-text">04. </p>
              <h1>Entre em Contato</h1>
          </div>
          <ContactForm>
            <div className="form-row">
              <input type="text" placeholder="Nome"/>
              <input type="text" placeholder="E-mail"/>
            </div>
              <textarea rows={4} placeholder="Mensagem"></textarea>

              <button>Enviar</button>
          </ContactForm>
          
        </Section>

        
      </Main>
    </>
 
  )
}
