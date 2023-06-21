import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import React from 'react';
import { AuthContext } from '../Authentication/AuthenticationContext';

export const ProtectedRoute = ({ children }: any) => {
  const authContext = useContext(AuthContext);
  const user = authContext.user;

  if (!authContext.isLogged) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
