import React from 'react';
import styled from 'styled-components';
import CaruoselItem from './CarouselItem.jsx';

const CarouselList = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Carousel = () => {
  return (
    <div>
      <CarouselList>
        <CaruoselItem
          url="/products/home"
          img="/src/assets/icons/category_HomeGarden.svg"
          name="Hogar y jardín"
        />
        <CaruoselItem
          url="/products/technology"
          img="/src/assets/icons/category_ComputersElectronic.svg"
          name="Electrónica"
        />
        <CaruoselItem
          url="/products/coleccionismo"
          img="/src/assets/icons/category_CollectiblesArt.svg"
          name="Coleccionismo"
        />
        <CaruoselItem
          url="/products/bikes"
          img="/src/assets/icons/category_Bikes.svg"
          name="bicicletas"
        />
        <CaruoselItem
          url="/products/coches"
          img="/src/assets/icons/category_Cars.svg"
          name="Coches"
        />
        <CaruoselItem
          url="/products/modaYAccesorio"
          img="/src/assets/icons/category_FashionAccessories.svg"
          name="Moda y Accesorios"
        />
        <CaruoselItem
          url="/products/CineLibrosYmusica"
          img="/src/assets/icons/category_GamesBooks.svg"
          name="Cine, Libros y Música"
        />
        <CaruoselItem
          url="/products/empleo"
          img="/src/assets/icons/category_Jobs.svg"
          name="Empleo"
        />
        <CaruoselItem
          url="/products/Servicios"
          img="/src/assets/icons/category_Services.svg"
          name="Servicios"
        />
        <CaruoselItem
          url="/products/babiesChild"
          img="/src/assets/icons/category_BabiesChild.svg"
          name="Bebés y niños"
        />
      </CarouselList>
    </div>
  );
};

export default Carousel;
