
import { Form, Button, Select, FormTitle, Container } from "../../styled/EditStyled";
import { useSelector ,useDispatch} from "react-redux";
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { editPerson } from "../../features/User/personSlice";
import { useNavigate  } from 'react-router-dom';




export const EditPerson = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
            id: parseInt(e.target.id.value),
            email:  e.target.email.value,
            startDate: e.target.date.value,
            description: e.target.description.value,
            contact: e.target.number.value,
            status: personStatus,
        };
        dispatch(editPerson(editedPerson));
        navigate("/users");
    }

    return (
        <Container>
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
                <Button type="submit" value="Edit" />
            </Form>
        </Container>
    );
};
