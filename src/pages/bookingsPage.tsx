import Table from '../components/tableBooking';
import { TopBar } from '../components/topBar';
import { Nav } from '../components/nav';
import { Select } from '../components/select';
import { TabsMenu } from '../components/tabsMenuBooking';
import React from 'react';
export const Bookings = () => {
  return (
    <>
      <TopBar />
      <Nav name="Bookings" />
      <TabsMenu />
      <Select />
      <Table />
    </>
  );
};
