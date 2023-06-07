import styled from "styled-components";
import { colors } from "../../styled/theme";
import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import { createRoom } from "../../features/jsonSlice/roomSlice";

export const FormTitle = styled.h1`
    text-align: center;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2em;
    label{
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    input{
       border-bottom: 1px solid ${colors.grey};
       border-left: none;
       border-top:none;
       border-right:none;
       text-align: center;
       width: 50%;
       margin-left: 25%;
  
    }
`;
export const Button = styled.input`
    cursor: pointer;
    color: ${colors.green};
    width: 20em;
    padding: 1em 2em;
    background-color: rgb(235, 241, 239);
    border: none;
    border-radius: 12px;
    margin-left: 40%;
`;
export const NewRoom = () => {
    const dispatch = useDispatch();
    const [roomStatus, setRoomStatus] = useState('Available');
    const handleStatusChange = (e) => {
        setRoomStatus(e.target.value); // Actualizar el estado con el valor seleccionado
    };

    const handleCreateRoom = (e) => {
        e.preventDefault();
        let newRoom = {
            room_number: e.target.room_number.value,
            room_id: e.target.room_id.value,
            amenities: [ e.target.amenities.value],
            bed_type: e.target.bed_type.value,
            rate: e.target.rate.value,
            offer_price: e.target.offer_price.value,
            status: roomStatus,
        };
        dispatch(createRoom(newRoom));
    }
    return (
        <div>
            <FormTitle>NEW ROOM</FormTitle>
            <Form onSubmit={handleCreateRoom}>
                <label htmlFor="fname">Photo Url</label>
                <input type="text" id="photo" name="photo" defaultValue="" placeholder="img" />
                <label htmlFor="lname">Room Number</label>
                <input type="text" id="room_number" name="name" defaultValue="" placeholder="Room Number" />
                <label htmlFor="lname">Room Id</label>
                <input type="text" id="room_id" name="room_id" defaultValue="" placeholder="Room Id" />
                <label htmlFor="fname">Amenities</label>
                <input type="text" id="amenities" name="amenities" defaultValue="" placeholder="Amenities" />
                <label htmlFor="Description">Bed type</label>
                <input type="text" id="bed_type" name="bed_type" defaultValue="" placeholder="Bed type" />
                <label htmlFor="Phone Number">Rate</label>
                <input type="number" id="rate" name="rate" defaultValue="" placeholder="Rate" />
                <label htmlFor="fname">Offer price</label>
                <input type="text" id="offer_price" name="offer_price" defaultValue="" placeholder="Offer price" />
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
            
                {/* <CustomLink to="/users"> */}
                <Button type="submit" value="Create" />
                {/* </CustomLink> */}
            </Form>
        </div>
    );
};
