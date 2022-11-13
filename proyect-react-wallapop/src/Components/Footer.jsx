import React from 'react';
import styled from 'styled-components';

const TextFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 4rem;
  margin: auto;
  width: 80%;
  padding: 30px 0;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  ul {
    padding: 0;
  }
  div > div {
    font-weight: 700;
  }
  color: #607d8b;
`;

const ListItem = styled.li`
  list-style: none;
  font-size: medium;
`;

const Footer = () => {
  return (
    <TextFooter>
      <div>
        <img src="/src/assets/images/logo-wallapop.svg" />
        <p>Copyright © 2022 Wallapop © de sus respectivos propietarios</p>
      </div>

      <div>
        <div>Wallapop</div>
        <ul>
          <ListItem>Quiénes somos</ListItem>
          <ListItem>Cómo funciona</ListItem>
          <ListItem>Brand Book</ListItem>
          <ListItem>Prensa Empleo</ListItem>
        </ul>
      </div>
      <div>
        <div>Soporte</div>
        <ul>
          <ListItem>Preguntas frecuentes</ListItem>
          <ListItem>Cómo funciona</ListItem>
          <ListItem>Reglas de publicación</ListItem>
          <ListItem>Consejos de seguridad</ListItem>
        </ul>
      </div>
      <div>
        <div>Legal</div>
        <ul>
          <ListItem>Condiciones de uso</ListItem>
          <ListItem>Política de privacidad</ListItem>
          <ListItem>Cookies</ListItem>
        </ul>
      </div>
      <div>
        <div>Motor</div>
        <ul>
          <ListItem>Particulares</ListItem>
          <ListItem>Profesionales</ListItem>
        </ul>
      </div>
      <div>
        <div>Wallapop PRO</div>
        <ul>
          <ListItem>Impulsa tu negocio</ListItem>
        </ul>
      </div>
    </TextFooter>
  );
};

export default Footer;
