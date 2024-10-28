import React from 'react';
import { createContext, useMemo } from 'react';
import useAuthentication from '../hooks/useAuthentication';

export type AuthContextType = {
  isAuthenticated: () => boolean;
  login: (arg1: string, arg2: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
  isValid: boolean;
  validateAndRefreshToken: () => Promise<void>;
  loadingSplash: boolean;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const {
    isAuthenticated,
    login,
    isLoading,
    isValid,
    validateAndRefreshToken,
    loadingSplash,
    logout,
  } = useAuthentication();
  const value = useMemo(
    () => ({
      isAuthenticated,
      login,
      isLoading,
      isValid,
      validateAndRefreshToken,
      loadingSplash,
      logout,
    }),
    [isAuthenticated, login, isLoading, isValid, validateAndRefreshToken, loadingSplash, logout],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
