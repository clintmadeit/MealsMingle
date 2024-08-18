import React, { createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { loginRequest } from "./auth.service";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setIsAuthenticated(true);
        setUser(u);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: false,
        isLoading: false,
        error: null,
        user: null,
        onLogin: () => {},
        onRegister: () => {},
        onLogout: () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
