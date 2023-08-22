import { ContainerTabsMenu, Button } from '../styled/TabsMenuStyled';
import { Content } from '../styled/TopBarStyled';
import { useTypedDispatch, useTypedSelector } from '../app/store';

import {
  enableAllView,
  enableArchiveView,
} from '../features/Contact/contactSlice';
import React from 'react';
export const TabsMenuContact = () => {
  const sideBarActivated = useTypedSelector((state) => state.sidebar.activated);
  const dispatch = useTypedDispatch();

  const handleShowAll = () => {
    dispatch(enableAllView());
  };
  const handleShowArchive = () => {
    dispatch(enableArchiveView());
  };
  return (
    <Content $sideBarActivated={sideBarActivated}>
      <ContainerTabsMenu>
        <Button type="button" onClick={handleShowAll}>
          All Contacts
        </Button>
        <Button type="button" onClick={handleShowArchive}>
          Archived
        </Button>
      </ContainerTabsMenu>
    </Content>
  );
};
