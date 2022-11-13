import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';

const Construction = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const ImageConstruction = styled.img`
  display: block;
  margin: auto;
  width: 600px;
`;

const Buzon = () => {
  return (
    <div>
      <Header />
      <Construction>Página en construcción, disculpen las molestias</Construction>
      <ImageConstruction src="/src/assets/icons/Construc img.png" />
    </div>
  );
};

export default Buzon;
