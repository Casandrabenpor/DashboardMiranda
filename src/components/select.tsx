import {
  SelectStyled,
  StyledSearchSelect,
  ButtonGreenDark,
} from '../styled/ButtonStyled';
import { Content, CustomLink } from '../styled/TopBarStyled';
import { SearchBooking } from './search';
import { orderBookings } from '../features/Booking/bookingSlice';
import { useTypedDispatch, useTypedSelector } from '../app/store';
import React from 'react';

export const Select = () => {
  const sideBarActivated = useTypedSelector((state) => state.sidebar.activated);

  const dispatch = useTypedDispatch();

  const handleSelectOrder = (event: any) => {
    event.preventDefault();
    const orderSelect = event.target.value;
    dispatch(orderBookings(orderSelect));
  };
  return (
    <Content sideBarActivated={sideBarActivated}>
      <StyledSearchSelect>
        <SearchBooking></SearchBooking>
        <CustomLink to="/newBooking">
          <ButtonGreenDark>New Booking</ButtonGreenDark>
        </CustomLink>
        <SelectStyled name="order" onChange={handleSelectOrder}>
          <option value="date">Order Date</option>
          <option value="guest">Guest</option>
          <option value="check_in">Check in</option>
          <option value="check_out">Check out</option>
        </SelectStyled>
      </StyledSearchSelect>
    </Content>
  );
};
