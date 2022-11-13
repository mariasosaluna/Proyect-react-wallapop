import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '/src/Components/Product';
import Header from '../Components/Header';
import { getallProducts } from '/src/services/product.js';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin: 100px;
  background-color: #ebeff1;
`;

const ProducList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
`;

const HeadStyled = styled.div`
  border-radius: 20px;
  margin: 50px; ;
`;

const InputStyled = styled.input`
  border-radius: 20px;
  padding: 10px;
  margin: 5px 0 5px 20px;
  width: 500px;
  border: 2px solid #90a4ae;
  &:hover {
    border: 2px solid black;
  }
`;

const ProductButton = styled.button`
  border-radius: 20px;
  padding: 10px;
  width: 250px;
  margin: 0 0 5px 10px;
  background-color: #12c1ab;
  color: white;
  transition: 0.5s;
  :hover {
    background-color: #0f9988;
  }
`;
const types = {
  home: 'Hogar y jardín',
  technology: 'Electrónica',
  babiesChild: 'Bebés y niños',
  bikes: 'Bicicletas',
};
const Products = () => {
  const [products, setProducts] = useState([]);
  const { type } = useParams('type');
  const { search } = useParams('search');

  const getProducts = async () => {
    const allProducts = await getallProducts();

    if (!search && !type) {
      setProducts(allProducts.data);
    }

    if (search) {
      setProducts(
        allProducts.data.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    }
    if (type) {
      setProducts(allProducts.data.filter((item) => item.type === type));
    }
  };

  useEffect(() => {
    getProducts();
  }, [search, type]);

  return (
    <>
      <Header />
      <HeadStyled>
        <p>Inicio / {type}</p>
        <h2>{types[type]}</h2>
      </HeadStyled>
      <InputStyled placeholder="🔍 Busca en todas las categorías"></InputStyled>
      <ProductButton>
        <img src="/src/assets/icons/filter.svg" />
        Profundizar búsqueda
      </ProductButton>
      <ListContainer>
        <ProducList>
          {products.map((product, index) => {
            return <Product key={index} {...product} />;
          })}
        </ProducList>
      </ListContainer>
    </>
  );
};

export default Products;
