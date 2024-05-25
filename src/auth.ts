import React, { createContext, useState, useContext } from 'react'; 


export const AuthContext = createContext<any | null>(null);


export const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(false); 
  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};


export const useAuth = () => useContext(AuthContext);
