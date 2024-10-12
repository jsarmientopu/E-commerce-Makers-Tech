import React, { createContext, useState, useContext } from 'react';
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const login = (username, password) => {


    console.log("login");
    setIsAuthenticated(true);
    return true
  };
  const logout = () => {
    
    console.log("log out");
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ logout, isAuthenticated, setIsAuthenticated, user, setUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
export { AuthProvider, useAuth };