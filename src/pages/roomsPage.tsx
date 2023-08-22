import { TopBar } from '../components/topBar';
import { Nav } from '../components/nav';
import TableRoom from '../components/tableRoom';
import { SelectRoom } from '../components/selectRoom';
import { TabsMenuRoom } from '../components/tabsMenuRoom';
import React from 'react';
export const Rooms = () => {
  return (
    <>
      <TopBar />
      <Nav name="Room" />
      <TabsMenuRoom />
      <SelectRoom />
      <TableRoom />
    </>
  );
};
