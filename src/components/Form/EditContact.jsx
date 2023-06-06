import {Form,Button,Select,FormTitle} from "../../styled/EditStyled";
import { useSelector, useDispatch } from "react-redux";
import { editContact } from "../../features/jsonSlice/contactSlice";
import { useLocation } from 'react-router-dom';




export const EditContact = () => {
    const dispatch = useDispatch();
    const location = useLocation()
    const contactId = location.pathname.replace("/contacts/edit/","");
    
    const contacts = useSelector(state => state.contact.data);
    const contact = contacts.find(contact => contact.order_id === contactId);
    console.log( contact);
    
    const handleEditContact = (e) => {
        e.preventDefault();
        let editedContact = {
            order_id: parseInt(e.target.id.value),
            date: e.target.date.value,
            customer: e.target.customer.value,
            comment: e.target.comment.value,
            

        };
        dispatch(editContact(editedContact));
    }

    return (
        <div>
            <FormTitle>EDIT CONTACT</FormTitle>
            <Form onSubmit={handleEditContact} >
            <label htmlFor="lname">ID</label>
            <input type="text" id="id" name="id" value={contact.order_id} placeholder="id" />
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