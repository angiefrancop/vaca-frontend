import { useContext, createContext, useState } from 'react';

const AuthContext = createContext({
  isAuthenticated: false,
  getAccessToken: () => {},
  saveUser: (userData) => {}
});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token') ? true : false);
  const [accessToken, setAccessToken] = useState('');

  function getAccessToken() {
    return accessToken;
  }

  function saveUser(userData) {
    console.log('userData', userData);
    setAccessToken(userData.token);
    setIsAuthenticated(true);
    localStorage.setItem('token', JSON.stringify(userData.token));
  }

  return <AuthContext.Provider value={{ isAuthenticated, getAccessToken, saveUser }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
