import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../Components/context/UserContext';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { addProduct } from '../services/product';

const NewProductContainer = styled.div`
  min-height: 90%;
  padding: 50px;
  background-color: #ebeff1;
`;

const FormContainer = styled.div`
  border-radius: 10px;
  background-color: white;
  width: 500px;
  min-height: 400px;
  padding: 30px;
  margin: auto;
  & > * {
    display: block;
    margin-top: 20px;
    width: 100%;
    padding: 5px;
  }
`;

const TypePrizeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const NewProduct = () => {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const { user } = useContext(UserContext);

  const uploadProduct = () => {
    if (name == '' || type == '' || price == '' || description == '') {
      setError('Todos los campos son obligatorios');
    }
    const product = {
      name: name,
      type: type,
      price: price,
      image: image || '/src/assets/images/default-product-img.webp',
      description: description,
      user: user.id,
    };
    if (!error) {
      addProduct(product);
    }
  };

  return (
    <>
      <Header />
      <NewProductContainer>
        <FormContainer>
          <h2>Nuevo producto</h2>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Nombre del producto"
            onChange={(e) => setName(e.target.value)}
          />
          <TypePrizeContainer>
            <select onChange={(e) => setType(e.target.value)} value={type}>
              <option value="">Selecciona tipo</option>
              <option value="home">Hogar y jardín</option>
              <option value="technology">Tecnología</option>
              <option value="coleccionismo">Coleccionismo</option>
              <option value="bikes">Bicicletas</option>
              <option value="coches">Coches</option>
              <option value="modaYAccesorios">Moda y accesorios</option>
              <option value="cineLibrosYMusica">Cine, libros y música</option>
              <option value="babiesChild">Bebés y niños</option>
              <option value="servicios">Servicios</option>
            </select>
            <input
              type="text"
              name="price"
              value={price}
              placeholder="Precio"
              onChange={(e) => setPrice(e.target.value)}
            />
          </TypePrizeContainer>
          <input
            type="text"
            name="image"
            value={image}
            placeholder="URL de la imagen"
            onChange={(e) => setImage(e.target.value)}
          />
          <textarea
            name="description"
            value={description}
            placeholder="Descripción del producto"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          {error && <div>{error}</div>}
          <button onClick={() => uploadProduct()}>Subir producto</button>
        </FormContainer>
      </NewProductContainer>
      <Footer />
    </>
  );
};

export default NewProduct;
