import { useMemo } from 'react';
import { useContext, createContext, useState } from 'react';

const AuthContext = createContext({
  isAuthenticated: false,
  accessToken: null,
  saveUser: (userData) => {}
});

export function AuthProvider({ children }) {
  //const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState(localStorage.getItem('token'));
  const isAuthenticated = useMemo(() => !!accessToken, [accessToken]);

  function saveUser(userData) {
    console.log('userData', userData);
    setAccessToken(userData.token);
    localStorage.setItem('token', userData.token);
  }

  return <AuthContext.Provider value={{ isAuthenticated, accessToken, saveUser }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
