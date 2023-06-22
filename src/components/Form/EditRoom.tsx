import {
  Form,
  Button,
  Select,
  FormTitle,
  Container,
} from '../../styled/EditStyled';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { editRoom } from '../../features/Room/roomApi';
import { useNavigate } from 'react-router-dom';
import { useTypedDispatch, useTypedSelector } from '../../app/store';

export const EditRoom = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const roomId = parseInt(location.pathname.replace('/rooms/edit/', ''));

  const rooms = useTypedSelector((state) => state.room.data);
  const room = rooms.find((room) => room.room_id === roomId);

  const [roomStatus, setRoomStatus] = useState(room.status);
  const handleStatusChange = (e: any) => {
    setRoomStatus(e.target.value); // Actualizar el estado con el valor seleccionado
  };

  const handleEditRoom = (e: any) => {
    e.preventDefault();
    let updateRoom = {
      room_number: e.target.room_number.value,
      room_id: parseInt(e.target.room_id.value),
      amenities: [e.target.amenities.value],
      bed_type: e.target.select.value,
      rate: e.target.rate.value,
      offer_price: e.target.offer_price.value,
      status: roomStatus,
    };
    dispatch(editRoom(updateRoom));
    navigate('/rooms');
  };

  return (
    <Container>
      <FormTitle>ROOM EDITOR</FormTitle>
      <Form onSubmit={handleEditRoom}>
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
          type="text"
          id="room_number"
          name="name"
          defaultValue={room.room_number}
          placeholder="Room Number"
        />
        <label htmlFor="lname">Room Id</label>
        <input
          type="text"
          id="room_id"
          name="room_id"
          value={room.room_id}
          placeholder="Room Id"
        />
        <label htmlFor="fname">Amenities</label>
        <input
          type="text"
          id="amenities"
          name="amenities"
          defaultValue={room.amenities[0]}
          placeholder="Amenities"
        />
        {/* <label htmlFor="Description">Bed type</label>
                <input type="text" id="bed_type" name="bed_type" defaultValue={room.bed_type} placeholder="Bed type" /> */}
        <Select name="select" defaultValue={room.room_type}>
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
          defaultValue={room.rate}
          placeholder="Rate"
        />
        <label htmlFor="fname">Offer price</label>
        <input
          type="number"
          id="offer_price"
          name="offer_price"
          min="1"
          defaultValue={room.offer_price}
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
        <Button type="submit" value="Edit" />
      </Form>
    </Container>
  );
};
