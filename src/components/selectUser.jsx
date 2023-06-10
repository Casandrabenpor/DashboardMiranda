import { SelectStyled, StyledSearchSelect, ButtonGreenDark, StyledBtnUser } from "../styled/ButtonStyled";
import { Content, CustomLink } from '../styled/TopBarStyled';
import { useSelector, useDispatch } from "react-redux";
import { SearchUser } from "../components/search";
import { orderUsers } from "../features/User/personSlice";



export const SelectUser = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const dispatch = useDispatch();
    const handleSelectOrder = (event) => {
        event.preventDefault();
        const orderSelect = event.target.value;
        dispatch(orderUsers(orderSelect));
    };
    return (
        <Content sideBarActivated={sideBarActivated}>
            <StyledSearchSelect>
                <SearchUser></SearchUser>
                <StyledBtnUser>
                    <CustomLink to="/newUser">
                        <ButtonGreenDark>New Employee</ButtonGreenDark>
                    </CustomLink>
                    <SelectStyled name="order" onChange={handleSelectOrder}>
                        <option value="date" >
                            Start Date
                        </option>
                        <option value="name">
                            Name
                        </option>


                    </SelectStyled>

                </StyledBtnUser>
            </StyledSearchSelect>
        </Content >
    )

};