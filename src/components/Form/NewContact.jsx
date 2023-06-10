import { useDispatch } from "react-redux";
import { Form, Button, Select, FormTitle, Container } from "../../styled/EditStyled";
import { createContact } from "../../features/Contact/contactApi";
import { useNavigate  } from 'react-router-dom';

export const NewContact = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCreateContact = (e) => {
        e.preventDefault();
        let newContact = {
            order_id: e.target.id.value,
            date: e.target.date.value,
            customer: e.target.customer.value,
            comment: e.target.comment.value,
            

        };
        dispatch(createContact(newContact));
        navigate("/contact");
    }
return (
    <Container>
        <FormTitle>NEW CONTACT</FormTitle>
        <Form onSubmit={handleCreateContact}>
         
            <label htmlFor="lname">ID</label>
            <input type="text" id="id" name="id" defaultValue="" placeholder="id" />
            <label htmlFor="lname">Date</label>
            <input type="date" id="date" name="date" defaultValue="" placeholder="Date" />
            <label htmlFor="fname">Customer</label>
            <input type="text" id="customer" name="customer" defaultValue="" placeholder="customer" />
            <label htmlFor="fname">Comment</label>
            <input type="text" id="comment" name="comment" defaultValue="" placeholder="comment" />
        
            <Button type="submit" value="Create" />
        </Form>
    </Container>
);
};