import React from 'react';
import styled from 'styled-components';

const CardProduct = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 10px;
  -webkit-box-shadow: 7px 4px 10px -4px rgba(173, 170, 173, 0.71);
  -moz-box-shadow: 7px 4px 10px -4px rgba(173, 170, 173, 0.71);
  box-shadow: 7px 4px 10px -4px rgba(173, 170, 173, 0.71);
  border-radius: 10px;
  padding: 10px;
  width: 300px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const CardImg = styled.img`
  display: block;
  margin: auto;
  max-height: 200px;
  max-width: 300px;
`;
const DesStyled = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Product = (props) => {
  const { name, images, description, price } = props;

  return (
    <>
      <div>
        <CardProduct>
          <CardImg src={images} />

          <h3>{price}</h3>
          <h4>{name}</h4>
          <DesStyled>{description}</DesStyled>
        </CardProduct>
      </div>
    </>
  );
};

export default Product;
