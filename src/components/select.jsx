import { SelectStyled,StyledSearchSelect,ButtonGreenDark } from "../styled/ButtonStyled";
import { Content } from '../styled/TopBarStyled';
import { useSelector } from "react-redux";
import { Search } from "./search";

export const Select = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
        <Content sideBarActivated={sideBarActivated}>
            <StyledSearchSelect>
                <Search></Search>
                <ButtonGreenDark>New Booking</ButtonGreenDark>
                <SelectStyled name="order">
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