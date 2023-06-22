import {
  Form,
  Button,
  Select,
  FormTitle,
  Container,
} from '../../styled/EditStyled';
import { createBooking } from '../../features/Booking/bookingApi';
import { useNavigate } from 'react-router-dom';
import { useTypedDispatch } from '../../app/store';
import React from 'react';

export const NewBooking = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const handleCreateBooking = (e: any) => {
    e.preventDefault();
    let newBooking = {
      guest: e.target.guest.value,
      id: e.target.booking_id.value,
      order_date: e.target.date.value,
      check_in: e.target.check_in.value,
      check_out: e.target.check_out.value,
      room_type: e.target.select.value,
    };
    dispatch(createBooking(newBooking));
    navigate('/bookings');
  };
  return (
    <Container>
      <FormTitle>NEW BOOKING</FormTitle>
      <Form onSubmit={handleCreateBooking}>
        <label htmlFor="fname">Photo Url</label>
        <input
          type="text"
          id="photo"
          name="photo"
          defaultValue=""
          placeholder="img"
        />
        <label htmlFor="lname">Guest</label>
        <input
          type="text"
          id="guest"
          name="guest"
          defaultValue=""
          placeholder="guest"
        />
        <label htmlFor="lname">Booking Id</label>
        <input
          type="text"
          id="booking_id"
          name="booking_id"
          defaultValue=""
          placeholder="Booking id"
        />
        <label htmlFor="fname">Order date</label>
        <input
          type="date"
          id="date"
          name="date"
          defaultValue=""
          placeholder="date"
        />
        <label htmlFor="fname">Check in</label>
        <input
          type="date"
          id="check_in"
          name="check_in"
          defaultValue=""
          placeholder="Check in"
        />
        <label htmlFor="fname">Check out</label>
        <input
          type="date"
          id="check_out"
          name="check_out"
          defaultValue=""
          placeholder="Check out"
        />

        <Select name="select" defaultValue="">
          <option value="Suite" id="option_1">
            Suite
          </option>
          <option value="Double Bed" id="option_2">
            Double Bed
          </option>
          <option value="Double Superior" id="option_3">
            Double Superior
          </option>
          <option value="Single Bed" id="option_3">
            Single Bed
          </option>
        </Select>

        <Button type="submit" value="Create" />
      </Form>
    </Container>
  );
};
