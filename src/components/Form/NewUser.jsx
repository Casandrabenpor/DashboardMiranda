import styled from "styled-components";
import { colors } from "../../styled/theme";
export const Form = styled.div`
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
       text-align: center;
       width: 50%;
       margin-left: 25%;
  
    }
`;
export const Button = styled.button`
    cursor: pointer;
    color: ${colors.green};
    width: 20em;
    padding: 1em 2em;
    background-color: rgb(235, 241, 239);
    border: none;
    border-radius: 12px;
    margin-left: 40%;
`;
export const NewUser = () => {
    return (
        <div>
            <h1>NEW USER</h1>
            <Form>
                <label htmlFor="fname">Photo</label>
                <input type="text" id="photo" name="photo" value="" placeholder="img" />
                <label htmlFor="lname">Full Name</label>
                <input type="text" id="name" name="name" value="" placeholder="Full Name" />
                <label htmlFor="lname">Email</label>
                <input type="text" id="email" name="email" value=""  placeholder="Email"/>
                <label htmlFor="fname">Start Date</label>
                <input type="date" id="date" name="date" value="" />
                <label htmlFor="Description">Description</label>
                <input type="text" id="description" name="description" value="" placeholder="Description"/>
                <label htmlFor="Phone Number">Phone Number</label>
                <input type="number" id="number" name="number" value="" placeholder="Number"/>
                <label htmlFor="fname">Room status</label>
                <label for="age1">Active</label>
                <input type="radio" id="status" name="status" value="" />
                <label for="age1">Inactive</label>
                <input type="radio" id="status" name="status" value="" />
                <Button type="button">Save</Button>
            </Form>
        </div>
    );
};
