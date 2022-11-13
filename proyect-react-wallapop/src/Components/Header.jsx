import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Login from './Login';
import { UserContext } from './context/UserContext';

const HeaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: white;
  border-bottom: 1px solid #90a4ae;

  @media (max-width: 600px) {
    display: block;
  }
`;

const LogoStyled = styled.div``;
const LeftHeaderContainer = styled.div`
  display: flex;
  @media (max-width: 600px) {
    display: block;
  }
`;
const RightHeaderContainer = styled.div`
  display: flex;
  flex-grow: 2;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const RegisterButton = styled.button`
  border-radius: 20px;
  background-color: white;
  border: 1px solid #12c1ab;
  color: #12c1ab;
  margin: 10px 20px 10px 40px;
  padding: 10px 15px;
  transition: 0.5s;
  :hover {
    background-color: #0f9988;
    color: white;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const ProductButton = styled.button`
  border-radius: 20px;
  background-color: #12c1ab;
  border: 1px solid #12c1ab;
  color: white;
  margin: 10px;
  padding: 10px 15px;
  transition: 0.5s;
  :hover {
    background-color: #0f9988;
    color: white;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const NewProductButton = styled(NavLink)`
  display: inline-block;
  border-radius: 20px;
  background-color: #12c1ab;
  color: white;
  margin-right: 50px;
  margin-top: 5px;
  padding: 10px 15px;
  transition: 0.5s;
  :hover {
    background-color: #0f9988;
  }
`;

const TopLink = styled(NavLink)`
  color: black;
  display: flex;
  align-items: center;
  margin: 0 25px;

  @media (max-width: 600px) {
    margin: 0 10px;
  }

  &:hover {
    color: #13c1ac;
    img {
      filter: invert(60%) sepia(89%) saturate(1954%) hue-rotate(128deg) brightness(96%)
        contrast(85%);
    }
  }
  & img {
    width: 30px;
    margin-right: 10px;
  }
`;

const SearchInputStyled = styled.input`
  border-radius: 20px;
  padding: 0 20px;
  margin: 8px 0 8px 20px;
  width: 50vw;
  border: 2px solid #90a4ae;
  &:hover {
    border: 2px solid black;
  }

  @media (max-width: 1480px) {
    width: 40vw;
  }

  @media (max-width: 600px) {
    width: 60%;
    padding: 10px;
  }
`;

const Header = () => {
  const { user, showLoggin, changeShowLogin } = useContext(UserContext);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const search = () => {
    navigate(`/search/${searchInput}`);
  };

  return (
    <>
      <HeaderStyled>
        <LeftHeaderContainer>
          <LogoStyled>
            <NavLink to="/">
              <img src="/src/assets/images/logo-wallapop.svg" />
            </NavLink>
          </LogoStyled>
          <SearchInputStyled
            value={searchInput}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                search();
              }
            }}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="🔍 Busca en todas las categorías"
          ></SearchInputStyled>
        </LeftHeaderContainer>
        <RightHeaderContainer>
          {!user.email && (
            <>
              <RegisterButton onClick={() => changeShowLogin(!showLoggin)}>
                Regístrate o inicia sesión
              </RegisterButton>
              <ProductButton onClick={() => changeShowLogin(!showLoggin)}>
                + Subir Producto
              </ProductButton>
            </>
          )}
          {user.email && (
            <>
              <TopLink to="/favoritos">
                <img src="/src/assets/icons/heart-svgrepo-com.svg" />
                Favoritos
              </TopLink>
              <TopLink to="/buzon">
                <img src="/src/assets/icons/mail-svgrepo-com.svg" />
                Buzón
              </TopLink>
              <TopLink to="/profile">
                <img src="/src/assets/icons/user-svgrepo-com.svg" />
                Tú
              </TopLink>
              <NewProductButton to="/new_product">+ subir producto</NewProductButton>
            </>
          )}
        </RightHeaderContainer>
      </HeaderStyled>
      {showLoggin && <Login />}
    </>
  );
};

export default Header;
