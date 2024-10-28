import { useState, useCallback, useEffect } from 'react';
import AuthRepository from '../repositories/AuthRepository';
import SecureStorage from '../../../shared/helpers/SecureStorage';
import { ErrorLoger } from '@ccu/shared';

interface User {
  userToken: string;
  // userName: string;
  // name: {
  //   firstName: string;
  //   lastName: string;
  // };
}

function useAuthentication() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingSplash, setLoadingSplash] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const isAuthenticated = useCallback((): boolean => !!user?.userToken, [user?.userToken]);

  const login = async (username: string, password: string) => {
    try {
      setIsLoading(true);
      if (!username || !password) {
        throw new Error('Nombre de usuario y contrasena son requeridos.');
      }
      const { token } = await AuthRepository.login(username, password);
      await SecureStorage.setItem('token', token);
      setUser({ userToken: token });
      setIsValid(true);
    } catch (err) {
      ErrorLoger.log(`Error logging in: ${err}`);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await SecureStorage.removeItem('token');
      setUser(null);
      setIsValid(false);
    } catch (err) {
      ErrorLoger.log(`Error logging out: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  const validateAndRefreshToken = useCallback(async () => {
    try {
      const token = await SecureStorage.getItem('token');
      if (!token) {
        throw new Error('No hay token de usuario.');
      }
      // validate token here
      setUser({ userToken: token });
      setIsValid(true);
    } catch (err) {
      ErrorLoger.log(`Error validating and refreshing token: ${err}`);
      setIsValid(false);
      setUser(null);
      // handle token invalidation
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getUserInfo = useCallback(async () => {
    return user;
  }, [user]);

  const init = useCallback(async () => {
    try {
      if (!user?.userToken) {
        await validateAndRefreshToken();
      }
    } catch (err) {
      ErrorLoger.log(`Error initializing app: ${err}`);
    } finally {
      setLoadingSplash(false);
    }
  }, [validateAndRefreshToken, user]);

  useEffect(() => {
    init();
  }, [init]);

  return {
    isAuthenticated,
    login,
    logout,
    user,
    isLoading,
    validateAndRefreshToken,
    isValid,
    loadingSplash,
    getUserInfo,
  };
}

export default useAuthentication;
