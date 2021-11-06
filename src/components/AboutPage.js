import React from 'react';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerBotton from '../subComponents/PowerBotton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';
import astronaut from '../assets/Images/spaceman.png';
import SoundBar from '../subComponents/SoundBar';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled.div`
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
  @media (max-width: 40em) {
    width: 60vw;
    height: 50vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 30em) {
    width: 50vw;
    height: auto;
    backdrop-filter: none;
    margin-top: 2rem;
  }
  @media (max-width: 20em) {
    padding: 1rem;
    font-size: calc(0.5rem + 1vw);
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerBotton />
        <SoundBar />
        <ParticleComponent theme="dark" />
        <BigTitle text="ABOUT" top="10%" left="5%" />
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>

        <Main>
          Hello, I am Adeyemo Rasheed, a Software Developer with Experience in
          Building Multiple Secure Web Applications. over the years I have
          achieved numerous training courses and a coding bootcamps combine with
          my creativity and personal attitudes to the Information Technologies.
          <br />
          <br />I have great desire to learn more Always passionate about the
          world of computer science and the algorithmic vision of the world.
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
