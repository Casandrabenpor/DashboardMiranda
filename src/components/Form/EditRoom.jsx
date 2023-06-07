
import {Form,Button,Select,FormTitle,Container} from "../../styled/EditStyled";
import { useSelector ,useDispatch} from "react-redux";
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { editRoom } from "../../features/jsonSlice/roomSlice";



export const EditRoom = () => {
    const dispatch = useDispatch();
    const location = useLocation()
    const roomId = parseInt(location.pathname.replace("/rooms/edit/",""));

    const rooms = useSelector(state => state.room.data);
    const room = rooms.find(room => room.room_id === roomId);

    const [roomStatus, setRoomStatus] = useState(room.status);
    const handleStatusChange = (e) => {
        setRoomStatus(e.target.value); // Actualizar el estado con el valor seleccionado
    };

    const handleEditRoom = (e) => {
        e.preventDefault();
        let updateRoom = {
            room_number: e.target.room_number.value,
            room_id: parseInt(e.target.room_id.value),
            amenities: [ e.target.amenities.value],
            bed_type: e.target.bed_type.value,
            rate: e.target.rate.value,
            offer_price: e.target.offer_price.value,
            status: roomStatus,
        };
        dispatch(editRoom(updateRoom));
    }

    return (
        <Container>
            <FormTitle>ROOM EDITOR</FormTitle>
            <Form onSubmit={handleEditRoom}>
                <label htmlFor="fname">Photo Url</label>
                <input type="text" id="photo" name="photo" defaultValue="" placeholder="img" />
                <label htmlFor="lname">Room Number</label>
                <input type="text" id="room_number" name="name" defaultValue={room.room_number} placeholder="Room Number" />
                <label htmlFor="lname">Room Id</label>
                <input type="text" id="room_id" name="room_id" value={room.room_id} placeholder="Room Id" />
                <label htmlFor="fname">Amenities</label>
                <input type="text" id="amenities" name="amenities" defaultValue={room.amenities[0]} placeholder="Amenities" />
                <label htmlFor="Description">Bed type</label>
                <input type="text" id="bed_type" name="bed_type" defaultValue={room.bed_type} placeholder="Bed type" />
                <label htmlFor="Phone Number">Rate</label>
                <input type="number" id="rate" name="rate" defaultValue={room.rate} placeholder="Rate" />
                <label htmlFor="fname">Offer price</label>
                <input type="text" id="offer_price" name="offer_price" defaultValue={room.offer_price} placeholder="Offer price" />
                <label htmlFor="fname">Room status</label>
                <label for="status1">Available</label>
                <input type="radio" 
                    id="status1" 
                    name="status" 
                    value="Available" 
                    checked={roomStatus === 'Available'}
                    onChange={handleStatusChange}/>
                <label for="status2">Occupied</label>
                <input type="radio"
                    id="status2"
                    name="status"
                    value="Occupied" 
                    checked={roomStatus === 'Occupied'} 
                    onChange={handleStatusChange}/>
            
                <Button type="submit" value="Edit" />
            
            </Form>
        </Container>
    );
};
