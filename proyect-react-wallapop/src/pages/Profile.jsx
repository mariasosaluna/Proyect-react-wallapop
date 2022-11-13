import React, { useContext } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { UserContext } from '../Components/context/UserContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ProfileContainer = styled.div`
  min-height: 90%;
  padding: 50px;
  background-color: #ebeff1;
`;

const Profile = () => {
  const navigate = useNavigate();

  const { user, changeUser } = useContext(UserContext);

  return (
    <>
      <Header />
      <ProfileContainer>
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
        <button
          onClick={() => {
            changeUser({});
            navigate('/');
          }}
        >
          Cerrar sesión
        </button>
      </ProfileContainer>
      <Footer />
    </>
  );
};

export default Profile;
