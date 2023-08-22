import { Form, Button, FormTitle, Container } from '../../styled/EditStyled';
import { createContact } from '../../features/Contact/contactApi';
import { useNavigate } from 'react-router-dom';
import { useTypedDispatch } from '../../app/store';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NewContact = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const handleCreateContact = (e: any) => {
    e.preventDefault();
    let newContact = {
      contact_id: e.target.id.value,
      date: e.target.date.value,
      customer: e.target.customer.value,
      comment: e.target.comment.value,
    };
    dispatch(createContact(newContact));
    navigate('/contact');
  };
  return (
    <Container>
      <ToastContainer theme="colored" />
      <FormTitle>NEW CONTACT</FormTitle>
      <Form onSubmit={handleCreateContact}>
        <label htmlFor="lname">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          defaultValue=""
          placeholder="Date"
          required
        />
        <label htmlFor="fname">Customer</label>
        <input
          type="text"
          id="customer"
          name="customer"
          defaultValue=""
          placeholder="customer"
          required
        />
        <label htmlFor="fname">Comment</label>
        <input
          type="text"
          id="comment"
          name="comment"
          defaultValue=""
          placeholder="comment"
          required
        />

        <Button type="submit" value="Create" />
      </Form>
    </Container>
  );
};
