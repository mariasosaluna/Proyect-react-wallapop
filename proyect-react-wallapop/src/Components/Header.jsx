import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
`;

const LogoStyled = styled.div``;
const LeftHeaderContainer = styled.div`
  display: flex;
`;
const RightHeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-grow: 2;
`;
const ProductButton = styled.button`
  border-radius: 20px;
  background-color: #12c1ab;
  color: white;
  margin-right: 50px;
  margin-top: 5px;
  padding: 10px 0 px 0;
  transition: 0.5s;
  :hover {
    background-color: #0f9988;
  }
`;

const TopLink = styled(NavLink)`
  color: black;
  display: flex;
  align-items: center;
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
  margin: 5px 0 5px 20px;
  width: 750px;
  border: 2px solid #90a4ae;
  &:hover {
    border: 2px solid black;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <LeftHeaderContainer>
        <LogoStyled>
          <NavLink to="/">
            <img src="/src/assets/images/logo-wallapop.svg" />
          </NavLink>
        </LogoStyled>
        <SearchInputStyled placeholder="🔍 Busca en todas las categorías"></SearchInputStyled>
      </LeftHeaderContainer>
      <RightHeaderContainer>
        <TopLink to="favoritos">
          <img src="/src/assets/icons/heart-svgrepo-com.svg" />
          Favoritos
        </TopLink>
        <TopLink to="buzon">
          <img src="/src/assets/icons/mail-svgrepo-com.svg" />
          Buzón
        </TopLink>
        <TopLink to="usuario">
          <img src="/src/assets/icons/user-svgrepo-com.svg" />
          Tú
        </TopLink>
        <ProductButton>+ subir producto</ProductButton>
      </RightHeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
