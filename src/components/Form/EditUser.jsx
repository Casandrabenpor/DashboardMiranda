import styled from "styled-components";
import { colors } from "../../styled/theme";
import { useSelector ,useDispatch} from "react-redux";
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { editPerson } from "../../features/jsonSlice/personSlice";


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
export const EditPerson = () => {
    const dispatch = useDispatch();
    const location = useLocation()
    const personId = parseInt(location.pathname.replace("/users/edit/",""));

    const people = useSelector(state => state.person.data);
    const person = people.find(person => person.id === personId);

    
    const [personStatus, setPersonStatus] = useState('Active');
    const handleStatusChange = (e) => {
        setPersonStatus(e.target.value); // Actualizar el estado con el valor seleccionado
    };

    const handleEditPerson = (e) => {
        e.preventDefault();
        let editedPerson = {
            name: e.target.name.value,
            id: e.target.id.value,
            email:  e.target.email.value,
            startDate: e.target.date.value,
            description: e.target.description.value,
            contact: e.target.number.value,
            status: personStatus,
        };
        dispatch(editPerson(editedPerson));
    }

    return (
        <div>
            <FormTitle>EDIT USER</FormTitle>
            <Form on onSubmit={handleEditPerson}>
                <label htmlFor="fname">Photo Url</label>
                <input type="text" id="photo" name="photo" defaultValue="" placeholder="img" />
                <label htmlFor="lname">Full Name</label>
                <input type="text" id="name" name="name" defaultValue={person.name} placeholder="Full Name" />
                <label htmlFor="fname">Id user</label>
                <input type="text" id="id" name="id" value={person.id} placeholder="id" />
                <label htmlFor="lname">Email</label>
                <input type="text" id="email" name="email" defaultValue={person.email}  placeholder="Email"/>
                <label htmlFor="fname">Start Date</label>
                <input type="date" id="date" name="date" defaultValue={person.date} />
                <label htmlFor="Description">Description</label>
                <input type="text" id="description" name="description" defaultValue={person.description} placeholder="Description"/>
                <label htmlFor="Phone Number">Phone Number</label>
                <input type="number" id="number" name="number" defaultValue={person.number} placeholder="Number"/>
                <label htmlFor="fname">Status</label>
                <input type="radio" 
                    id="status1" 
                    name="status" 
                    value="Active" 
                    checked={person.status === 'Active'} // Marcar el radio button si el valor es "Active"
                    onChange={handleStatusChange} />
                <label for="status1">Active</label>
                <input type="radio"
                    id="status2"
                    name="status"
                    value="Inactive"
                    checked={person.status === 'Inactive'} // Marcar el radio button si el valor es "Inactive"
                    onChange={handleStatusChange} />
                <label for="status2">Inactive</label>
                {/* <CustomLink to="/users"> */}
                <Button type="submit" value="Create" />
                {/* </CustomLink> */}
            </Form>
        </div>
    );
};
