import React from 'react';
import Header from '../Components/Header';
import styled from 'styled-components';
import Carousel from '../Components/Carousel.jsx/Carousel';
import Footer from '../Components/Footer';

const Intro = styled.div`
  font-family: Wallie, Helvetica;
  color: ${(props) => props.color};
  display: flex;
  justify-content: center;
`;
const Wallapro = styled.div`
  font-family: Wallie, Helvetica;
  letter-spacing: 2px;
  color: white;
  background-color: #395df9;
  padding: 20px;
`;
const CenterContainer = styled.div`
  margin: auto;
  width: 80%;
  padding: 30px 0;
`;

const Home = () => {
  return (
    <>
      <Header />
      <Intro color="#607d8b">
        <p>Wallapop, la plataforma líder de compraventa de productos de segunda mano </p>
      </Intro>
      <Intro color="#FFFFF">
        <h1>¿Qué estás buscando hoy?</h1>
      </Intro>
      <CenterContainer>
        <Carousel />
      </CenterContainer>
      <Wallapro>
        <CenterContainer>
          <h2>A quien madruga Wallapop PRO ayuda</h2>
          <p>
            ¿Tienes un negocio y quieres empezar a vender online? Descubre nuestras
            soluciones para impulsar tus ventas. ¡Al lío!
          </p>
          <button>Más información</button>
        </CenterContainer>
      </Wallapro>
      <div>
        <h2>La tecnología que necesitas</h2>
        <section>section</section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
