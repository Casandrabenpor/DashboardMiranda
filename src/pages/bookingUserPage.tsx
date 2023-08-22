import { GuestDetailUser } from '../components/GuestDetail/GuestDetailUser';
import { Nav } from '../components/nav';
import { TopBar } from '../components/topBar';
import { GuestDetailRoom } from '../components/GuestDetail/GuestDetailRoom';
import { SwiperDetail } from '../components/GuestDetail/SwiperDetail';
import { useLocation } from 'react-router-dom';
import React from 'react';
import { useTypedSelector } from '../app/store';

export const BookingsUserPage = () => {
  const location = useLocation();
  const bookingId = location.pathname.replace('/BookingsUser/', '');

  const bookings = useTypedSelector((state) => state.booking.data);
  const booking = bookings.find((booking) => booking.id === bookingId);

  return (
    <>
      <TopBar />
      <Nav />
      <SwiperDetail />
      {booking ? <GuestDetailUser booking={booking} /> : null}
      <GuestDetailRoom />
    </>
  );
};
