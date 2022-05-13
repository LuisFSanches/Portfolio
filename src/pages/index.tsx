/* eslint-disable @next/next/no-img-element */
import { Header } from "../components/Header";
import { Description, Introduction, Main, MySkills, Section, Skill } from "./style";

export default function Home() {
  return (
    <>
      <Header/>
      <Main>
        <Introduction>
          <p className="gold-text">Olá, me chamo</p>
          <h1>Luis Felipe Sanches</h1>
          <h2>Um Engenheiro criativo.</h2>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries </p>
        </Introduction>

        <Section>
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

        <Section>
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
      </Main>
    </>
 
  )
}
