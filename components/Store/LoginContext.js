import React, { useState } from 'react';

const loginContext = React.createContext({
  tokenId: '',
  isloggedIn: false,
  login: () => {},
  logout: () => {},
});

export const LoginContextProvider = (props) => {
  const storedToken = localStorage.getItem('tokenId');
  const [token, setToken] = useState(storedToken);
   const [isloggedIn,setIsloggedIn] = useState(false);

  const login = (token) => {
    setIsloggedIn(true);
console.log("hello"+isloggedIn);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem('tokenId');
    setIsloggedIn(false);
    setToken(null);
  };

  const contextValue = {
    tokenId: token,
    isloggedIn: isloggedIn,
    login: login,
    logout: logout,
  };

  return (
    <loginContext.Provider value={contextValue}>
      {props.children}
    </loginContext.Provider>
  );
};

export default loginContext;