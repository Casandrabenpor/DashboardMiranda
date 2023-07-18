import { IconNav, ContainerNav, Content, Burger } from '../styled/TopBarStyled';
import { toggle } from '../features/sideBarSlice';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useContext } from 'react';
import { AuthContext } from './Authentication/AuthenticationContext';
import React from 'react';
import { IonIcon } from '@ionic/react';
import { useTypedDispatch, useTypedSelector } from '../app/store';

export const Nav = (props: any) => {
  const sideBarActivated: boolean = useTypedSelector(
    (state) => state.sidebar.activated,
  );
  const dispatch = useTypedDispatch();
  const authContext = useContext(AuthContext);

  const toggleSideBar = (event: any) => {
    event.preventDefault();
    dispatch(toggle());
  };
  const handleLogout = (e: any) => {
    e.preventDefault();
    authContext.logout();
  };

  return (
    <Content sideBarActivated={sideBarActivated}>
      <ContainerNav>
        <Burger>
          <GiHamburgerMenu onClick={toggleSideBar} />
        </Burger>
        <p>{props.name} </p>
        <IconNav>
          <IonIcon name="mail-outline"></IonIcon>
          <IonIcon name="notifications-outline"></IonIcon>
          <IonIcon
            name="log-out-outline"
            onClick={(e) => handleLogout(e)}
          ></IonIcon>
        </IconNav>
      </ContainerNav>
    </Content>
  );
};
