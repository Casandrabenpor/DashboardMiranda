import { SelectStyled,StyledSearchSelect,ButtonGreenDark } from "../styled/ButtonStyled";
import { Content,CustomLink } from '../styled/TopBarStyled';
import { useDispatch, useSelector } from "react-redux";
import { Search } from "./search";
import { orderBookings } from "../features/jsonSlice/bookingSlice";

export const Select = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);

    const dispatch = useDispatch();

    const handleSelectOrder = (event) =>{
        event.preventDefault();
        const orderSelect = event.target.value;
        dispatch(orderBookings(orderSelect));
    };
    return (
        <Content sideBarActivated={sideBarActivated}>
            <StyledSearchSelect>
                <Search></Search>
                <CustomLink to="/newBooking">
                <ButtonGreenDark>New Booking</ButtonGreenDark>
                </CustomLink>
                <SelectStyled name="order" onChange={handleSelectOrder}>
                    <option value="date">Order Date</option>
                    <option value="Guest" >
                        Guest
                    </option>
                    <option value="check_in">
                        Check in
                    </option>
                    <option value="check_out" >
                        Check out
                    </option>

                </SelectStyled>
            </StyledSearchSelect>
        </Content>
    )

};