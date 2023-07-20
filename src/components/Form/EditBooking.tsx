import {
  Form,
  Button,
  Select,
  FormTitle,
  Container,
} from '../../styled/EditStyled';
import { editBooking } from '../../features/Booking/bookingApi';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useTypedDispatch, useTypedSelector } from '../../app/store';

export const EditBooking = () => {
  const dispatch = useTypedDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const bookingId = location.pathname.replace('/bookings/edit/', '');

  const bookings = useTypedSelector((state) => state.booking.data);
  const booking = bookings.find((booking) => booking.id === bookingId);

  const handleEditBooking = (e: any) => {
    e.preventDefault();
    let editedBooking = {
      guest: e.target.guest.value,
      id: e.target.booking_id.value,
      order_date: e.target.date.value,
      check_in: e.target.check_in.value,
      check_out: e.target.check_out.value,
      room_type: e.target.select.value,
      room_number: booking?.room_number,
      check_in_hour: booking?.check_in_hour,
      check_out_hour: booking?.check_out_hour,
      status: booking?.status,
      room_id: booking?.room_id,
    };
    dispatch(editBooking(editedBooking));
    navigate('/bookings');
  };

  return (
    <Container>
      <FormTitle>EDIT BOOKING</FormTitle>
      <Form onSubmit={handleEditBooking}>
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
          defaultValue={booking?.guest}
          placeholder="guest"
        />
        <label htmlFor="lname">Booking Id</label>
        <input
          type="text"
          id="booking_id"
          name="booking_id"
          defaultValue={booking?.id}
          placeholder="Booking id"
          readOnly
        />
        <label htmlFor="fname">Order date</label>
        <input
          type="datetime-local"
          id="date"
          name="date"
          defaultValue={booking?.order_date}
          placeholder="date"
        />
        <label htmlFor="fname">Check in</label>
        <input
          type="date"
          id="check_in"
          name="check_in"
          defaultValue={booking?.check_in}
          placeholder="Check in"
        />
        <label htmlFor="fname">Check out</label>
        <input
          type="date"
          id="check_out"
          name="check_out"
          defaultValue={booking?.check_out}
          placeholder="Check out"
        />

        <Select name="select" defaultValue={booking?.guest}>
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
        <Button type="submit" value="Edit" />
      </Form>
    </Container>
  );
};
