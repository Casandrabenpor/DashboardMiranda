import { ContainerTabsMenu, Button } from '../styled/TabsMenuStyled';
import { Content } from '../styled/TopBarStyled';
import { useTypedDispatch, useTypedSelector } from '../app/store';
import {
  filteredAll,
  filteredChecking,
  filteredCheckout,
  filteredInProgress,
} from '../features/Booking/bookingSlice';
import React from 'react';
export const TabsMenu = () => {
  const sideBarActivated = useTypedSelector((state) => state.sidebar.activated);
  const dispatch = useTypedDispatch();

  const handleShowAll = () => {
    dispatch(filteredAll());
  };

  const handleShowChecking = () => {
    dispatch(filteredChecking());
  };

  const handleShowCheckout = () => {
    dispatch(filteredCheckout());
  };
  const handleShowInProgress = () => {
    dispatch(filteredInProgress());
  };
  return (
    <Content sideBarActivated={sideBarActivated}>
      <ContainerTabsMenu>
        <Button type="button" onClick={handleShowAll}>
          All Bookings
        </Button>
        <Button type="button" onClick={handleShowChecking}>
          Checking In
        </Button>
        <Button type="button" onClick={handleShowCheckout}>
          Checking Out
        </Button>
        <Button type="button" onClick={handleShowInProgress}>
          In Progress
        </Button>
      </ContainerTabsMenu>
    </Content>
  );
};
