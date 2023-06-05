import styled from "styled-components";
import { colors } from "../../styled/theme";
import { createBooking } from "../../features/jsonSlice/bookingSlice";
import { useDispatch } from "react-redux";

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
export const NewBooking = () => {
    const dispatch = useDispatch();
    const handleCreateBooking = (e) => {
        e.preventDefault();
        let newBooking = {
            guest: e.target.guest.value,
            id: e.target.booking_id.value,
            order_date: e.target.date.value,
            check_in: e.target.check_in.value,
            check_out: e.target.check_out.value,
            // room_type: e.target.room_type1.value,

        };
        dispatch(createBooking(newBooking));
    }
    return (
        <div>
            <FormTitle>NEW BOOKING</FormTitle>
            <Form onSubmit={handleCreateBooking}>
                <label htmlFor="fname">Photo Url</label>
                <input type="text" id="photo" name="photo" defaultValue="" placeholder="img" />
                <label htmlFor="lname">Guest</label>
                <input type="text" id="guest" name="guest" defaultValue="" placeholder="guest" />
                <label htmlFor="lname">Booking Id</label>
                <input type="text" id="booking_id" name="booking_id" defaultValue="" placeholder="Booking id" />
                <label htmlFor="fname">Order date</label>
                <input type="date" id="date" name="date" defaultValue="" placeholder="date" />
                <label htmlFor="fname">Check in</label>
                <input type="date" id="check_in" name="check_in" defaultValue="" placeholder="Check in" />
                <label htmlFor="fname">Check out</label>
                <input type="date" id="check_out" name="check_out" defaultValue="" placeholder="Check out" />


                <Select name="select">
                    <option value="value1" id="room_type1">Suite</option>
                    <option value="value2" id="room_type2" >Double Bed</option>
                    <option value="value3" id="room_type3">Double Superior</option>
                </Select>

                {/* <CustomLink to="/users"> */}
                <Button type="submit" value="Create" />
                {/* </CustomLink> */}
            </Form>
        </div>
    );
};