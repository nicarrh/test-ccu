import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../contexts/AuthContext';

function useContextAuthentication(): AuthContextType {
  const authContext = useContext(AuthContext);
  return authContext;
}

export default useContextAuthentication;
