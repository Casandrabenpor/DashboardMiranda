import styled from "styled-components";
import { colors } from "../../styled/theme";
import { useSelector, useDispatch } from "react-redux";
import { editContact } from "../../features/jsonSlice/contactSlice";
import { useLocation } from 'react-router-dom';


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
export const Select = styled.select`
    background-color: #eee;
    border: none;
    outline: none;
    padding: 5px 10px;
    width: 150px;
    text-align: center;
    display: flex;
`;

export const EditContact = () => {
    const dispatch = useDispatch();
    const location = useLocation()
    const contactId = location.pathname.replace("/contact/edit/","");
    const contacts = useSelector(state => state.contact.data);
    const contact = contacts.find(contact => contact.id === contactId);

    const handleEditContact = (e) => {
        e.preventDefault();
        let editContact = {
            order_id: e.target.id.value,
            date: e.target.date.value,
            customer: e.target.customer.value,
            comment: e.target.comment.value,
            

        };
        dispatch(editContact(editContact));
    }

    return (
        <div>
            <FormTitle>EDIT BOOKING</FormTitle>
            <Form onSubmit={handleEditContact} >
            <label htmlFor="lname">ID</label>
            <input type="text" id="id" name="id" value={contact.id} placeholder="id" />
            <label htmlFor="lname">Date</label>
            <input type="date" id="date" name="date" defaultValue={contact.date} placeholder="Date" />
            <label htmlFor="fname">Customer</label>
            <input type="text" id="customer" name="customer" defaultValue={contact.customer} placeholder="customer" />
            <label htmlFor="fname">Comment</label>
            <input type="text" id="comment" name="comment" defaultValue={contact.comment} placeholder="comment" />
        

            {/* <CustomLink to="/users"> */}
            <Button type="submit" value="Edit" />
            {/* </CustomLink> */}
            </Form>
        </div>
    );
};