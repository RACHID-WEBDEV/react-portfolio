import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Media from 'react-media';
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvg';
import { DarkTheme } from '../components/Themes';

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  @media (max-width: 40em) {
    left: 1rem;
     svg {
        width: 20px;
        height: 20px;
            
      }
    
  }

  & > *:not(:last-child) {
    margin: 0.5rem 0;
    @media (max-width: 20em){
        margin: 0.3rem 0px;
    }
    
    
`;
const Line = styled(motion.span)`
  width: 2px;
  height: 5rem;
  background-color: ${props =>
    props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  @media (max-width: 50em) {
    background-color: ${props =>
      props.color === 'light' ? DarkTheme.body : DarkTheme.body};
  }
`;

const SocialIcons = props => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}
      >
        <NavLink
          style={{ color: 'inherit' }}
          target="_blank"
          to={{ pathname: 'https://github.com/rachid-webdev' }}
        >
          <Media queries={{ small: { maxWidth: 768 } }}>
            {matches =>
              matches.small ? (
                <Github
                  width={20}
                  height={20}
                  fill={
                    props.theme === 'dark' ? DarkTheme.body : DarkTheme.body
                  }
                />
              ) : (
                <Github
                  width={25}
                  height={25}
                  fill={
                    props.theme === 'dark' ? DarkTheme.text : DarkTheme.body
                  }
                />
              )
            }
          </Media>
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.2 }}
      >
        <NavLink
          style={{ color: 'inherit' }}
          target="_blank"
          to={{ pathname: 'https://twiter.com/horlameday110' }}
        >
          <Media queries={{ small: { maxWidth: 768 } }}>
            {matches =>
              matches.small ? (
                <Twitter
                  width={20}
                  height={20}
                  fill={
                    props.theme === 'dark' ? DarkTheme.body : DarkTheme.body
                  }
                />
              ) : (
                <Twitter
                  width={25}
                  height={25}
                  fill={
                    props.theme === 'dark' ? DarkTheme.text : DarkTheme.body
                  }
                />
              )
            }
          </Media>
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.4 }}
      >
        <NavLink
          style={{ color: 'inherit' }}
          target="_blank"
          to={{ pathname: 'https://facbook.com/olamiderasheed' }}
        >
          <Media queries={{ small: { maxWidth: 768 } }}>
            {matches =>
              matches.small ? (
                <Facebook
                  width={20}
                  height={20}
                  fill={
                    props.theme === 'dark' ? DarkTheme.body : DarkTheme.body
                  }
                />
              ) : (
                <Facebook
                  width={25}
                  height={25}
                  fill={
                    props.theme === 'dark' ? DarkTheme.text : DarkTheme.body
                  }
                />
              )
            }
          </Media>
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.6 }}
      >
        <NavLink
          style={{ color: 'inherit' }}
          target="_blank"
          to={{ pathname: 'https://github.com/rachid-webdev' }}
        >
          <Media queries={{ small: { maxWidth: 768 } }}>
            {matches =>
              matches.small ? (
                <YouTube
                  width={20}
                  height={20}
                  fill={
                    props.theme === 'dark' ? DarkTheme.body : DarkTheme.body
                  }
                />
              ) : (
                <YouTube
                  width={25}
                  height={25}
                  fill={
                    props.theme === 'dark' ? DarkTheme.text : DarkTheme.body
                  }
                />
              )
            }
          </Media>
        </NavLink>
      </motion.div>
      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: '5rem',
        }}
        transition={{ type: 'spring', duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};

export default SocialIcons;
