import { Form, Button, FormTitle, Container } from '../../styled/EditStyled';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { editPerson } from '../../features/User/userApi';
import { useNavigate } from 'react-router-dom';
import { useTypedDispatch, useTypedSelector } from '../../app/store';

export const EditPerson = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const personId = location.pathname.replace('/users/edit/', '');

  const people = useTypedSelector((state) => state.person.data);
  const person = people.find((person) => person.id === personId);

  const [personStatus, setPersonStatus] = useState(
    person?.status ?? 'Inactive',
  );
  const handleStatusChange = (e: any) => {
    setPersonStatus(e.target.value); // Actualizar el estado con el valor seleccionado
  };

  const handleEditPerson = (e: any) => {
    e.preventDefault();
    let editedPerson = {
      name: e.target.name.value,
      id: e.target.id.value,
      email: e.target.email.value,
      startDate: e.target.date.value,
      description: e.target.description.value,
      contact: e.target.number.value,
      status: personStatus,
    };
    dispatch(editPerson(editedPerson));
    navigate('/users');
  };

  return (
    <Container>
      <FormTitle>EDIT USER</FormTitle>
      <Form onSubmit={handleEditPerson}>
        <label htmlFor="fname">Photo Url</label>
        <input
          type="text"
          id="photo"
          name="photo"
          defaultValue=""
          placeholder="img"
        />
        <label htmlFor="lname">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={person?.name}
          placeholder="Full Name"
        />
        <label htmlFor="fname">Id user</label>
        <input
          type="text"
          id="id"
          name="id"
          value={person?.id}
          placeholder="id"
          readOnly
        />
        <label htmlFor="lname">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          defaultValue={person?.email}
          placeholder="Email"
        />
        <label htmlFor="fname">Start Date</label>
        <input
          type="date"
          id="date"
          name="date"
          defaultValue={person?.startDate}
        />
        <label htmlFor="Description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={person?.description}
          placeholder="Description"
        />
        <label htmlFor="Phone Number">Phone Number</label>
        <input
          type="text"
          id="number"
          name="number"
          defaultValue={person?.contact}
          placeholder="Number"
        />
        <label htmlFor="fname">Status</label>
        <input
          type="radio"
          id="status1"
          name="status"
          value="Active"
          checked={personStatus === 'Active'} // Marcar el radio button si el valor es "Active"
          onChange={handleStatusChange}
        />
        <label htmlFor="status1">Active</label>
        <input
          type="radio"
          id="status2"
          name="status"
          value="Inactive"
          checked={personStatus === 'Inactive'} // Marcar el radio button si el valor es "Inactive"
          onChange={handleStatusChange}
        />
        <label htmlFor="status2">Inactive</label>
        <Button type="submit" value="Edit" />
      </Form>
    </Container>
  );
};
