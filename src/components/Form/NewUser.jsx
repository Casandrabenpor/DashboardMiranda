import { Form, Button, Select, FormTitle } from "../../styled/EditStyled";
import { CustomLink } from "../../styled/TopBarStyled";
import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import { createPerson } from "../../features/jsonSlice/personSlice";

export const NewUser = () => {
    const dispatch = useDispatch();
    const [personStatus, setPersonStatus] = useState('Active');
    const handleStatusChange = (e) => {
        setPersonStatus(e.target.value); // Actualizar el estado con el valor seleccionado
    };
    // Para crear el uuario con un handle
    const handleCreatePerson = (e) => {
        e.preventDefault();
        let newPerson = {
            name: e.target.name.value,
            id: e.target.id.value,
            email: e.target.email.value,
            startDate: e.target.date.value,
            description: e.target.description.value,
            contact: e.target.number.value,
            status: personStatus,
        };
        dispatch(createPerson(newPerson));
    }
    return (
        <div>
            <FormTitle>NEW USER</FormTitle>
            <Form on onSubmit={handleCreatePerson}>
                <label htmlFor="fname">Photo Url</label>
                <input type="text" id="photo" name="photo" defaultValue="" placeholder="img" />
                <label htmlFor="lname">Full Name</label>
                <input type="text" id="name" name="name" defaultValue="" placeholder="Full Name" />
                <label htmlFor="fname">Id user</label>
                <input type="text" id="id" name="id" defaultValue="" placeholder="id" />
                <label htmlFor="lname">Email</label>
                <input type="text" id="email" name="email" defaultValue="" placeholder="Email" />
                <label htmlFor="fname">Start Date</label>
                <input type="date" id="date" name="date" defaultValue="" />
                <label htmlFor="Description">Description</label>
                <input type="text" id="description" name="description" defaultValue="" placeholder="Description" />
                <label htmlFor="Phone Number">Phone Number</label>
                <input type="number" id="number" name="number" defaultValue="" placeholder="Number" />
                <label htmlFor="fname">Status</label>
                <input type="radio"
                    id="status1"
                    name="status"
                    value="Active"
                    checked={personStatus === 'Active'} // Marcar el radio button si el valor es "Active"
                    onChange={handleStatusChange} />
                <label for="status1">Active</label>
                <input type="radio"
                    id="status2"
                    name="status"
                    value="Inactive"
                    checked={personStatus === 'Inactive'} // Marcar el radio button si el valor es "Inactive"
                    onChange={handleStatusChange} />
                <label for="status2">Inactive</label>
                <CustomLink to="/users">
                    <Button type="submit" value="Create" />
                </CustomLink>
            </Form>
        </div>
    );
};
