import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const CarouselItemStyle = styled(NavLink)`
  color: #90a4ae;
  & > * {
    display: block;
    text-align: center;
    margin: auto;
  }
  &:hover {
    color: #13c1ac;
    img {
      filter: invert(60%) sepia(89%) saturate(1954%) hue-rotate(128deg) brightness(96%)
        contrast(85%);
    }
  }
`;

const CarouselItem = (props) => {
  return (
    <CarouselItemStyle to={props.url}>
      <img src={props.img} />
      {props.name}
    </CarouselItemStyle>
  );
};

export default CarouselItem;
