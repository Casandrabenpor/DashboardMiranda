import { GuestDetailUser } from '../components/GuestDetailRoom/GuestDetailUser';
import { Nav } from '../components/nav';
import { TopBar } from '../components/topBar';
import { GuestDetailRoom } from '../components/GuestDetailRoom/GuestDetailRoom';
import { SwiperDetail } from '../components/GuestDetailRoom/SwiperDetail';
import React from 'react';

export const RoomUserPage = () => {
  return (
    <>
      <TopBar />
      <Nav />
      <SwiperDetail />
      <GuestDetailUser />
      <GuestDetailRoom />
    </>
  );
};
