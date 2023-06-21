import React from 'react';
import room from '../../assets/bedroom.jpg';
import { SwiperStyled } from '../../styled/BookingUserStyled';
export const SwiperDetail = () => {
  return (
    <SwiperStyled>
      <img src={room} alt="swiper" />
    </SwiperStyled>
  );
};
