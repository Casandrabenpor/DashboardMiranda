import { Navigate  } from 'react-router-dom';

export const ProtectedRoute = ({ user, children }) => {
    console.log(user);
    if(!user?.loggedIn)
    { 
      return <Navigate to="/login" replace />;
    }
  
    return  children;
  };