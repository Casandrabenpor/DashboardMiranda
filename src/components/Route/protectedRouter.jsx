import { Navigate  } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthenticationContext';
import { useContext } from 'react';

export const ProtectedRoute = ({ children }) => {
  const authContext = useContext(AuthContext);
  const user = authContext.user;

    if(!user?.isLogged)
    { 
      return <Navigate to="/login" replace />;
    }
  
    return  children;
  };