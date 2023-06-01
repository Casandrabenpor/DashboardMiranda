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
                <input type="text" id="photo" name="photo" value="photo" />
                <label htmlFor="lname">Full Name</label>
                <input type="text" id="name" name="name" value="name" />
                <label htmlFor="lname"></label>
                <input type="text" id="email" name="email" value="email" />
                <label htmlFor="fname">Start Date</label>
                <input type="date" id="date" name="date" value="date" />
                <label htmlFor="Description">Description</label>
                <input type="text" id="description" name="description" value="description" />
                <label htmlFor="Phone Number">Phone Number</label>
                <input type="number" id="number" name="number" value="number" />
                <label htmlFor="fname">Room status</label>
                <input type="radio" id="status" name="status" value="status" />
                <Button type="button">Save</Button>
            </Form>
        </div>
    );
};
