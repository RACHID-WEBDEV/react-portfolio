import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes';
import { motion } from 'framer-motion';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerBotton from '../subComponents/PowerBotton';

import { Work } from '../data/WorkData';
import Card from '../subComponents/Card';
import { YinYang } from './AllSvg';
import BigTitlte from '../subComponents/BigTitlte';
import SoundBar from '../subComponents/SoundBar';

const Box = styled.div`
  background-color: ${props => props.theme.body};

  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
  @media (max-width: 50em) {
    left: calc(8rem + 15vw);
  }
  @media (max-width: 40em) {
    left: calc(2rem + 15vw);
  }
  @media (max-width: 25em) {
    left: calc(1rem + 15vw);
  }
  @media (max-width: 40em) {
    top: 30%;
    left: calc(6rem + 15vw);
  }
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
  @media (max-width: 40em) {
    width: 60px;
    height: 60px;
    svg {
      width: 60px;
      height: 60px;
    }
  }
  @media (max-width: 25em) {
    width: 50px;
    height: 50px;
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        'rotate(' + -window.pageYOffset + 'deg)');
    };

    window.addEventListener('scroll', rotate);
    return () => {
      window.removeEventListener('scroll', rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="light" />
        <PowerBotton />
        <SoundBar />
        <BigTitlte text="WORK" top="10%" right="20%" />
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map(d => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
