import React, { lazy, Suspense, useState } from 'react';

import { motion } from 'framer-motion';
import SoundBar from '../subComponents/SoundBar';

import styled, { keyframes, ThemeProvider } from 'styled-components';

import { DarkTheme, mediaQueries } from './Themes';
import astronaut from '../assets/Images/spaceman.png';
import pdficon from '../assets/Images/download-Icon.png';
import Loading from '../subComponents/Loading';
import { NavLink } from 'react-router-dom';
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
  overflow: hidden;
`;

const float = keyframes`
0% { transform: translateY(-10px)         }
    50% { transform: translateY(15px) translateX(15px)        }
    100% { transform: translateY(-10px)         }
`;

const SpaceMan = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  animation: ${float} 4s ease infinite;
  width: 20vw;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled(motion.div)`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  ${mediaQueries(40)`
          width: 60vw;
          height: 50vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);


  `};
  ${mediaQueries(30)`
          width: 50vw;
          height: auto;
          backdrop-filter: none;
          margin-top:2rem;

  `};

  ${mediaQueries(20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
  `};
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const RESUME = styled(NavLink)`
  color: ${props => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 5;
`;
const AboutPage = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <SoundBar />
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          onClick={() => handleClick()}
        >
          <LogoComponent theme="dark" />
          <PowerBotton />
          <SocialIcons theme="dark" />
          <ParticlesComponent theme="dark" />

          <SpaceMan
            initial={{ right: '-20%', top: '100%' }}
            animate={{
              right: '5%',
              top: '10%',
              transition: { duration: 2, delay: 0.5 },
            }}
          >
            <img src={astronaut} alt="spaceman" />
          </SpaceMan>
          <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          >
            Hello, I am Adeyemo Rasheed, a Software Developer with Experience in
            Building Multiple Secure Web Applications. over the years I have
            achieved numerous training courses and a coding bootcamps combine
            with my creativity and personal attitudes to the Information
            Technologies.
            <br />
            <br />I have great desire to learn more Always passionate about the
            world of computer science and the algorithmic vision of the world.
          </Main>
          <BottomBar>
            <RESUME
              target="_blank"
              to={{
                pathname:
                  'https://drive.google.com/file/d/1RgNb-YWlzUf7qP6F-Jkf_-fVweq0saZb/view?usp=sharing',
              }}
            >
              <motion.h2
                initial={{
                  y: 200,
                  transition: { type: 'spring', duration: 1.5, delay: 5 },
                }}
                animate={{
                  y: 0,
                  transition: { type: 'spring', duration: 1.5, delay: 5 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={pdficon}
                  height="auto"
                  width="15%"
                  style={{ marginRight: '3px' }}
                  alt="pdf Icon"
                />
                Download CV
              </motion.h2>
            </RESUME>
          </BottomBar>
          <BigTitle text="ABOUT" top="10%" left="5%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default AboutPage;
