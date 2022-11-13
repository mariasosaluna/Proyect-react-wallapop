import React, { createContext, useCallback, useEffect, useState } from 'react';

export const UserContext = createContext({
  user: {},
  changeUser: () => null,
  showLoggin: false,
  changeShowLogin: () => null,
});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const localStorageUser = localStorage.getItem('user');
    return localStorageUser ? JSON.parse(localStorageUser) : {};
  });
  const [showLoggin, setShowLoggin] = useState(false);

  const changeUser = useCallback((userParam) => {
    setUser(userParam);
  }, []);

  const changeShowLogin = useCallback((show) => {
    setShowLoggin(show);
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        changeUser,
        showLoggin,
        changeShowLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
