import {
  Form,
  Button,
  Select,
  FormTitle,
  Container,
} from '../../styled/EditStyled';
import { editContact } from '../../features/Contact/contactApi';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useTypedDispatch, useTypedSelector } from '../../app/store';
import React from 'react';

export const EditContact = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const contactId = location.pathname.replace('/contacts/edit/', '');

  const contacts = useTypedSelector((state) => state.contact.data);
  const contact = contacts.find((contact) => contact.order_id === contactId);

  const handleEditContact = (e: any) => {
    e.preventDefault();
    let editedContact = {
      order_id: e.target.id.value,
      date: e.target.date.value,
      customer: e.target.customer.value,
      comment: e.target.comment.value,
    };
    dispatch(editContact(editedContact));
    navigate('/contact');
  };

  return (
    <Container>
      <FormTitle>EDIT CONTACT</FormTitle>
      <Form onSubmit={handleEditContact}>
        <label htmlFor="lname">ID</label>
        <input
          type="text"
          id="id"
          name="id"
          value={contact?.order_id}
          placeholder="id"
        />
        <label htmlFor="lname">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          defaultValue={contact?.date}
          placeholder="Date"
        />
        <label htmlFor="fname">Customer</label>
        <input
          type="text"
          id="customer"
          name="customer"
          defaultValue={contact?.customer}
          placeholder="customer"
        />
        <label htmlFor="fname">Comment</label>
        <input
          type="text"
          id="comment"
          name="comment"
          defaultValue={contact?.comment}
          placeholder="comment"
        />

        <Button type="submit" value="Edit" />
      </Form>
    </Container>
  );
};
