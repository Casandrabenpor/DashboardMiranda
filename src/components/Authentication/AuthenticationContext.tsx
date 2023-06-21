import React, { FC, createContext, useState } from 'react';

class User implements IUser {
  email: string;
  isLogged: boolean;
  user: string;

  constructor(email: string, isLogged: boolean, user: string) {
    this.email = email;
    this.isLogged = isLogged;
    this.user = user;
  }
  login(user: string, email: string, isLogged: boolean): void {
    // Implement the login functionality here
    // For example, you can set the provided values to the instance properties
    this.user = user;
    this.email = email;
    this.isLogged = isLogged;
  }
  logout(): void {
    // Implement the logout functionality here
    // For example, you can reset the instance properties to their default values
    this.user = '';
    this.email = '';
    this.isLogged = false;
  }
}

export interface IUser {
  email: string;
  isLogged: boolean;
  user: string;
  login: (user: string, email: string, isLogged: boolean) => void;
  logout: () => void;
}
const defaultUser = new User('', false, '');
// Crea el contexto de autenticación
export const AuthContext = createContext<IUser>(null!);

// Crea el proveedor del contexto de autenticación
export const AuthProvider: FC = ({ children }: any) => {
  //Obtener usuario del local storage
  const userJson = localStorage.getItem('user');
  let userLoaded: User = defaultUser;
  if (userJson) {
    userLoaded = JSON.parse(userJson);
  }

  const [user, setUser] = useState<User>(userLoaded);

  // Función para iniciar sesión
  const login = (user: string, email: string) => {
    let userLogged = new User(user, true, email);
    setUser(userLogged);
    // guardar en el local storage
    let userJson = JSON.stringify(userLogged);
    localStorage.setItem('user', userJson);
    localStorage.setItem('user', userJson);
  };

  // Función para cerrar sesión
  const logout = () => {
    let userLoggedOut = new User(user.user, false, user.email);
    setUser(userLoggedOut);

    // guardar en el local storage
    let userJson = JSON.stringify(userLoggedOut);
    localStorage.setItem('user', userJson);
  };

  return (
    <AuthContext.Provider value={{ ...user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};