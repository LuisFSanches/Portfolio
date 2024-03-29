/* eslint-disable @next/next/no-img-element */
import { GlobalStyle } from '../styles/global'
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SocialMediaSideBar } from "../components/SocialMediaSideBar";
import { Description, ImageContainer, Introduction, Main, MySkills, ProjectContainer, ProjectDescription, ProjectLink, Section, Skill, TechsApplied } from "../styles/index_style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faGlobe} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef} from 'react';
import { LayoutContext } from '../contexts/LayoutContext';
import { ZoomedImage } from '../components/ZoomedImage';
import Aos from 'aos'
import "aos/dist/aos.css"

export default function Home() {

  const {overlay, handleOpenZoomedImage,handleCloseModals} = useContext(LayoutContext)
  
  const ref = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const node = ref.current
    document.addEventListener("mousedown", (event)=>{
      if(node?.contains(event.target as Node)){
        handleCloseModals()
      }
    })
    Aos.init({duration:1800})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  return (
    <>
      <GlobalStyle showScroll={overlay}/>
      <Header/>
      <SocialMediaSideBar/>
      <ZoomedImage/>

      <Main overlay={overlay}  ref={ref}>
        <Introduction id="introducao" data-aos ="fade-down-right" data-aos-once="true">
          <p className="gold-text" >Olá, me chamo</p>
          <h1 >Luis Felipe Sanches</h1>
          <h2>Desenvolvedor FullStack.</h2>
          <p> Sou um Engenheiro Projetista que decidiu seguir um sonho antigo e se tornar um desenvolvedor de software. 
            Atualmente atuo como desenvolvedor web fullstack. </p>
        </Introduction>

        <Section id="sobremim" data-aos ="fade-up-left" data-aos-once="true">
          <div className="title">
            <p className="gold-text">01. </p>
            <h1>Sobre mim</h1>
          </div>

            <Description>
              <div className="description-text">
                <p>Olá, meu nome é Luis Felipe Sanches da Silva, atuei por quase três anos como Engenheiro Projetista, principalmente na área de <a href="https://grabcad.com/luis.felipe.sanches-1/models" target="_blank" rel="noopener noreferrer" className="gold-text">projetos</a> e análises envolvendo segurança de máquinas e equipamentos. </p>
                <p>Trabalho muito bem em equipe, e sou bastante detalhista. Essa é uma característica que desenvolvi ainda como projetista. </p>
                <p>Atualmente estou trabalhando como desenvolvedor fullstack na <a href="https://www.linkedin.com/company/corelabbr/" target="_blank" rel="noopener noreferrer" style={{ color:'#8e3ef7' }}>Corelab</a>.</p>
              </div>

              <img src='/images/avatar.png' alt="" />
            </Description>
          
        </Section>

        <Section id="skills" data-aos ="fade-up-right" data-aos-once="true">
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
              <img src="/images/nextjs.png" alt="" />
              <p>Next.js</p>
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

  
          </MySkills>
        </Section>
        <Section id="meustrabalhos" data-aos ="fade-up-left" data-aos-once="true">
          <div className="title">
            <p className="gold-text">03. </p>
            <h1>Meus Trabalhos</h1>
          </div>
          <ProjectContainer changeSide={false}>
            
            <ImageContainer onClick={()=>handleOpenZoomedImage("/images/projeto-mais-vida.png")}>

                <span><FontAwesomeIcon icon={faMagnifyingGlass}/></span>
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
                    <li>CSS</li>
                    <li>Node.js</li>
                    <li>Heroku</li>
                    
                  </ul>
              </TechsApplied>
              
              
              <ProjectLink>
                <a href="https://formulario-mirai-flores.netlify.app/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe}/></a>
              </ProjectLink>

            </ProjectDescription>

              <ImageContainer onClick={()=>handleOpenZoomedImage("/images/projeto-formulario-mirai.png")}>

                  <span><FontAwesomeIcon icon={faMagnifyingGlass}/></span>
                  <img src="/images/projeto-formulario-mirai.png" alt="" />

              </ImageContainer>
            
          </ProjectContainer>
        </Section>

        <Section id="contato" data-aos ="fade-up-right" data-aos-once="true">
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
