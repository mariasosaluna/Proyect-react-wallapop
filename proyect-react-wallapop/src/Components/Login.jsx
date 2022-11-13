import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { getAllUsers } from '../services/user';
import { UserContext } from './context/UserContext';

const LoginBackground = styled.div`
  width: 100%;
  min-height: 100%;
  background: rgba(37, 50, 56, 0.8);
  position: fixed;
  top: 0;
`;

const LoginForm = styled.div`
  border-radius: 10px;
  background-color: white;
  width: 500px;
  max-height: 300px;
  padding: 30px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  & > * {
    display: block;
    margin-top: 20px;
    width: 100%;
    padding: 5px;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  float: right;
`;
const Login = () => {
  const { user, changeUser, changeShowLogin } = useContext(UserContext);

  const [showError, setShowError] = useState(false);

  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const clickLogin = async () => {
    const dataUsers = await getAllUsers();

    const existingUsers = dataUsers.data.filter((item) => {
      return item.email === emailLogin && item.password === passwordLogin;
    });

    if (existingUsers.length > 0) {
      changeUser(existingUsers[0]);
    } else {
      setShowError(true);
    }
  };

  return (
    <>
      {!user.email && (
        <LoginBackground>
          <LoginForm>
            <CloseButton onClick={() => changeShowLogin(false)}>X</CloseButton>
            <h2>Log in</h2>
            <input
              type="text"
              value={emailLogin}
              placeholder="email"
              onChange={(e) => setEmailLogin(e.target.value)}
            />
            <input
              type="password"
              value={passwordLogin}
              placeholder="Contraseña"
              onChange={(e) => setPasswordLogin(e.target.value)}
            />
            <button onClick={() => clickLogin()}>Resgistrar</button>
            {showError && <div>Usuario o contraseña no válido</div>}
          </LoginForm>
        </LoginBackground>
      )}
    </>
  );
};

export default Login;
