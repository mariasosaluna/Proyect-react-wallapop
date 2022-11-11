import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';

const Construction = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Buzon = () => {
  return (
    <div>
      <Header />
      <Construction>Página en construcción, disculpen las molestias</Construction>
    </div>
  );
};

export default Buzon;
