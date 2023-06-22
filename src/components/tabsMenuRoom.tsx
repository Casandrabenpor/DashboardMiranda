import { ContainerTabsMenu, Button } from '../styled/TabsMenuStyled';
import { Content } from '../styled/TopBarStyled';
import { useTypedDispatch, useTypedSelector } from '../app/store';
import {
  filteredAll,
  filteredAvailable,
  filteredOccupied,
} from '../features/Room/roomSlice';
import React from 'react';

export const TabsMenuRoom = () => {
  const sideBarActivated = useTypedSelector((state) => state.sidebar.activated);
  const dispatch = useTypedDispatch();

  const handleShowAll = () => {
    dispatch(filteredAll());
  };

  const handleShowAvailable = () => {
    dispatch(filteredAvailable());
  };

  const handleShowOccupied = () => {
    dispatch(filteredOccupied());
  };
  return (
    <Content sideBarActivated={sideBarActivated}>
      <ContainerTabsMenu>
        <Button type="button" onClick={handleShowAll}>
          All Rooms
        </Button>
        <Button type="button" onClick={handleShowAvailable}>
          Available Rooms
        </Button>
        <Button type="button" onClick={handleShowOccupied}>
          Occupied Rooms
        </Button>
      </ContainerTabsMenu>
    </Content>
  );
};
