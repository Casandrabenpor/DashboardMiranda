import React, { useState } from 'react';
import { createRoom } from '../../features/Room/roomApi';
import {
  Form,
  Button,
  Select,
  FormTitle,
  Container,
} from '../../styled/EditStyled';
import { useNavigate } from 'react-router-dom';
import { useTypedDispatch } from '../../app/store';

export const NewRoom = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const [roomStatus, setRoomStatus] = useState('Available');
  const handleStatusChange = (e: any) => {
    setRoomStatus(e.target.value); // Actualizar el estado con el valor seleccionado
  };

  const handleCreateRoom = (e: any) => {
    e.preventDefault();
    let newRoom = {
      room_number: e.target.room_number.value,
      room_id: e.target.room_id.value,
      amenities: [e.target.amenities.value],
      bed_type: e.target.select.value,
      rate: e.target.rate.value,
      offer_price: e.target.offer_price.value,
      status: roomStatus,
    };
    dispatch(createRoom(newRoom));
    navigate('/rooms');
  };
  return (
    <Container>
      <FormTitle>NEW ROOM</FormTitle>
      <Form onSubmit={handleCreateRoom}>
        <label htmlFor="fname">Photo Url</label>
        <input
          type="text"
          id="photo"
          name="photo"
          defaultValue=""
          placeholder="img"
        />
        <label htmlFor="lname">Room Number</label>
        <input
          type="number"
          id="room_number"
          name="name"
          defaultValue=""
          placeholder="Room Number"
        />
        <label htmlFor="lname">Room Id</label>
        <input
          type="text"
          id="room_id"
          name="room_id"
          defaultValue=""
          placeholder="Room Id"
        />
        <label htmlFor="fname">Amenities</label>
        <input
          type="text"
          id="amenities"
          name="amenities"
          defaultValue=""
          placeholder="Amenities"
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
        <label htmlFor="Phone Number">Rate</label>
        <input
          type="number"
          id="rate"
          name="rate"
          min="10"
          defaultValue=""
          placeholder="Rate"
        />
        <label htmlFor="fname">Offer price</label>
        <input
          type="number"
          id="offer_price"
          name="offer_price"
          min="1"
          defaultValue=""
          placeholder="Offer price"
        />
        <label htmlFor="fname">Room status</label>
        <label htmlFor="status1">Available</label>
        <input
          type="radio"
          id="status1"
          name="status"
          value="Available"
          checked={roomStatus === 'Available'}
          onChange={handleStatusChange}
        />
        <label htmlFor="status2">Occupied</label>
        <input
          type="radio"
          id="status2"
          name="status"
          value="Occupied"
          checked={roomStatus === 'Occupied'}
          onChange={handleStatusChange}
        />
        <Button type="submit" value="Create" />
      </Form>
    </Container>
  );
};
