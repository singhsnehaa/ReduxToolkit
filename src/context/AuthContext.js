import React, {useEffect, useState, createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const login = (user) => {
    console.log('user :-', user);
    // api call with login data
    // validate the response
    // set user data to localstorage
    // setuserData
    
  };

  useEffect(() => {
    // get the user data from localstorage
    // if data then set state
    // else set null
  }, []);

  return <AuthContext.Provider value={{login,user}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
