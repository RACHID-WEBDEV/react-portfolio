import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled(motion(NavLink))`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 25rem;
  padding: 1rem;
  color: ${props => props.theme.text};
  border: 2px solid ${props => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  z-index: 5;
  @media (max-width: 25em) {
    width: calc(8rem + 15vw);
    height: 15rem;
  }
  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: all 0.3s ease;
  }
`;

const Image = styled.div`
  background-image: ${props => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}:hover & {
    border: 1px solid ${props => props.theme.body};
  }
`;
const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${props => props.theme.text};
  @media (max-width: 40em) {
    font-size: calc(0.8em + 1vw);
  }
  @media (max-width: 25em) {
    font-size: calc(0.6em + 1vw);
  }

  ${Box}:hover & {
    border-bottom: 1px solid ${props => props.theme.body};
  }
`;
const HashTags = styled.div`
  overflow-wrap: break-word;
  word-wrap: break-word;
  padding: 0.5rem 0;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
  @media (max-width: 25em) {
    font-size: calc(0.5em + 1vw);
  }
`;
// const Date = styled.span`
//   padding: 0.5rem 0;
//   @media (max-width: 25em) {
//     font-size: calc(0.5em + 1vw);
//   }
// `;

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
};

const BlogComponent = props => {
  const { name, tags, imgSrc, link } = props.blog;
  return (
    <Container variants={Item}>
      <Box target="_blank" to={{ pathname: link }}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>;
          })}
        </HashTags>
        {/* <Date>{date}</Date> */}
      </Box>
    </Container>
  );
};

export default BlogComponent;
