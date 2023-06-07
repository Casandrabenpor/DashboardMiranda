import React, { createContext, useState } from 'react';

// Crea el contexto de autenticación
export const AuthContext = createContext();

// Crea el proveedor del contexto de autenticación
export const AuthProvider = ({ children }) => {
    //Obtener usuario del local storage
    const userJson = localStorage.getItem("user");
    let userLoaded = null;
    if (userJson){
        userLoaded = JSON.parse(userJson);
    }
    else{
        userLoaded = {email: "", user: "", loggedIn: false}
    }

  const [user, setUser] = useState(userLoaded);

  // Función para iniciar sesión
  const login = (user, email) => {
    let userLogged = {user: user, email: email, isLogged: true}; 
    setUser(userLogged);
    // guardar en el local storage
    let userJson = JSON.stringify(userLogged);
    localStorage.setItem("user",userJson);
    localStorage.setItem("user",userJson);
  };

  // Función para cerrar sesión
  const logout = () => {
    let userLoggedOut = {user: user.user, email: user.email, isLogged: false};
    setUser(userLoggedOut);

    // guardar en el local storage
    let userJson = JSON.stringify(userLoggedOut);
    localStorage.setItem("user",userJson);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};