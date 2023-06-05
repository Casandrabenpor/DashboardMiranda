import styled from "styled-components";
import { colors } from "../../styled/theme";
import { useDispatch } from "react-redux";
import { createContact } from "../../features/jsonSlice/contactSlice";

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
export const NewContact = () => {
    const dispatch = useDispatch();
    const handleCreateContact = (e) => {
        e.preventDefault();
        let newContact = {
            order_id: e.target.id.value,
            date: e.target.date.value,
            customer: e.target.customer.value,
            comment: e.target.comment.value,
            

        };
        dispatch(createContact(newContact));
    }
return (
    <div>
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
        

            {/* <CustomLink to="/users"> */}
            <Button type="submit" value="Create" />
            {/* </CustomLink> */}
        </Form>
    </div>
);
};