import { motion } from 'framer-motion';
import styled, { ThemeProvider } from 'styled-components';
import { lazy, Suspense } from 'react';
import { lightTheme, mediaQueries } from './Themes';

import { Database, Develope } from './AllSvg';
import SoundBar from '../subComponents/SoundBar';
import Loading from '../subComponents/Loading';

//Components
const SocialIcons = lazy(() => import('../subComponents/SocialIcons'));
const PowerBotton = lazy(() => import('../subComponents/PowerBotton'));
const LogoComponent = lazy(() => import('../subComponents/LogoComponent'));
const ParticlesComponent = lazy(() =>
  import('../subComponents/ParticleComponent')
);
const BigTitle = lazy(() => import('../subComponents/BigTitle'));

const Box = styled(motion.div)`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueries(50)`
            flex-direction:column;  
            padding:8rem 0;
height:auto;
            &>*:nth-child(5){
              margin-bottom:5rem;
            }
           
  `};
  ${mediaQueries(30)`
           
            &>*:nth-child(5){
              margin-bottom:4rem;
            }
           
  `};
`;

const Main = styled(motion.div)`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  ${mediaQueries(60)`
            height: 55vh;
  `};

  ${mediaQueries(50)`
              width: 50vw;
              height: max-content;

  `};

  font-family: 'Ubuntu Mono', monospace;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${mediaQueries(60)`
          font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
          font-size:calc(1em + 2vw);
          margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
                      font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
                      font-size:calc(0.8em + 1vw);
                      svg{
                        width:30px;
                        height:30px;
                      }
  `};

  ${Main}:hover & {
    & > * {
      fill: ${props => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;
const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${props => props.theme.body};
  }

  ${mediaQueries(50)`
            font-size: calc(0.8em + 1vw);

  `};

  ${mediaQueries(30)`
                      font-size:calc(0.7em + 1vw);

              

  `};

  ${mediaQueries(25)`
                      font-size:calc(0.5em + 1vw);

              

  `};

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
        <SoundBar />
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme="light" />
          <PowerBotton />
          <SocialIcons theme="light" />
          <ParticlesComponent theme="light" />

          <Main>
            <Title>
              <Develope width={40} height={40} /> Frontend Developer
            </Title>
            <Description>
              I combine technical and creative expertise with experience to
              bring simply outstanding web development
            </Description>
            <Description>
              <strong>Skills</strong> <br />
              <p>
                Html, Css, Js, React, NextJs, Sass, Bootstrap, Tailwind,
                Firebase etc.
              </p>
            </Description>
            <Description>
              <strong>Tools</strong> <br />
              <p>VScode, Github, Codepen etc.</p>
            </Description>
          </Main>
          <Main>
            <Title>
              <Database width={40} height={40} /> Backend Developer
            </Title>
            <Description>
              I create custom Software / web apps using and most modern
              web-oriented technologies.
            </Description>

            <Description>
              <strong>I Work With</strong> <br />
              <ul>
                <li>LARAVEL</li>
                <li>Nodejs</li>
              </ul>
            </Description>
            <Description>
              <strong>Tools</strong> <br />
              <ul>
                <li>Postman, XAMPP, MySql, MongoDBCompass, nodemon etc</li>
              </ul>
            </Description>
          </Main>
          <BigTitle text="Skills" top="80%" right="30%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default MySkillsPage;
