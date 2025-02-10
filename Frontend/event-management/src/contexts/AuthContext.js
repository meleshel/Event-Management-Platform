import { createContext, useState, useEffect } from 'react';
import { login, register } from '../api.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = async (credentials) => {
    const response = await login(credentials);
    setUser(response.data.user);
  };

  const registerUser = async (userData) => {
    const response = await register(userData);
    setUser(response.data.user);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;