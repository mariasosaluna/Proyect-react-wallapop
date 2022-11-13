import React from 'react';
import Header from '../Components/Header';
import styled from 'styled-components';
import Carousel from '../Components/carousel/Carousel';
import Footer from '../Components/Footer';

const HomeContainer = styled.div`
  padding: 50px 0;

  @media (max-width: 1080px) {
    padding: 150px 0;
  }
`;

const Intro = styled.div`
  font-family: Wallie, Helvetica;
  color: ${(props) => props.color};
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;
const Wallapro = styled.div`
  font-family: Wallie, Helvetica;
  letter-spacing: 2px;
  color: white;
  background-color: #395df9;
  padding: 20px 0;
`;

const MainProducts = styled.div`
  font-family: Wallie, Helvetica;
  letter-spacing: 2px;
  background-color: #ebeff1;
  padding: 20px 0 40px;

  h2 {
    display: block;
    width: 80%;
    margin: 20px auto;
  }
`;

const CenterContainer = styled.div`
  margin: auto;
  width: 80%;
  padding: 30px 0;
`;
const Section = styled.section`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  background-color: #ebeff1;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  section {
    padding: 10px;
    background-color: white;
  }
`;
const ImageSection = styled.img`
  max-height: 160px;
  @media (max-width: 600px) {
    max-height: 100px;
  }
`;

const Home = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <Intro color="#607d8b">
          <p>
            Wallapop, la plataforma líder de compraventa de productos de segunda mano{' '}
          </p>
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
        <MainProducts>
          <h2>La tecnología que necesitas</h2>
          <Section>
            <section>
              <ImageSection src="/src/assets/images/section-ipad.jpeg" />
              <h3>Ipad</h3>
            </section>
            <section>
              <ImageSection src="/src/assets/images/tablets-section.jpeg" />
              <h3>Tablets</h3>
            </section>
            <section>
              <ImageSection src="/src/assets/images/auriculares-section.jpeg" />
              <h3>Auriculares</h3>
            </section>
            <section>
              <ImageSection src="/src/assets/images/portatil-section.jpeg" />
              <h3>Portatil</h3>
            </section>
          </Section>
        </MainProducts>
      </HomeContainer>
      <Footer />
    </>
  );
};

export default Home;
