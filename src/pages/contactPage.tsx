import { Nav } from '../components/nav';
import { TopBar } from '../components/topBar';
import { Customers } from '../components/customers';
import { SearchContact } from '../components/search';
import TableContact from '../components/tableContact';
import { TabsMenuContact } from '../components/tabsMenuContact';
import React from 'react';

export const Contact = () => {
  return (
    <>
      <TopBar />
      <Nav name="Contact" />
      <Customers showTitle={false} />
      <TabsMenuContact />

      <SearchContact />
      <TableContact />
    </>
  );
};
