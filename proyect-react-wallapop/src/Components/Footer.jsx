import React from 'react';
import styled from 'styled-components';

const TextFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 7rem;
  margin: 10px;
  padding: 40px;
`;

const ListItem = styled.li`
  list-style: none;
`;

const Footer = () => {
  return (
    <TextFooter>
      <div>
        <img src="/src/assets/images/logo-wallapop.svg" />
        <p>Copyright © 2022 Wallapop © de sus respectivos propietarios</p>
      </div>
      <div>
        <div>
          <div>Wallapop</div>{' '}
          <ul>
            <ListItem>Quiénes somos</ListItem>
            <ListItem>Cómo funciona</ListItem>
            <ListItem>Brand Book</ListItem>
            <ListItem>Prensa Empleo</ListItem>
          </ul>
          <div>Soporte</div>{' '}
          <ul>
            <ListItem>Preguntas frecuentes</ListItem>
            <ListItem>Cómo funciona</ListItem>
            <ListItem>Reglas de publicación</ListItem>
            <ListItem>Consejos de seguridad</ListItem>
          </ul>
        </div>
      </div>

      <div>Legal Condiciones de uso Política de privacidad Cookies</div>
      <div>Motor Particulares Profesionales</div>
      <div>Wallapop PRO Impulsa tu negocio</div>
    </TextFooter>
  );
};

export default Footer;
