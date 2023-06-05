import { SelectStyled, StyledSearchSelect, ButtonGreenDark, StyledBtnUser } from "../styled/ButtonStyled";
import { Content, CustomLink } from '../styled/TopBarStyled';
import { useSelector } from "react-redux";
import { Search } from "../components/search";




export const SelectUser = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
        <Content sideBarActivated={sideBarActivated}>
            <StyledSearchSelect>
                <Search></Search>
                <StyledBtnUser>
                    <CustomLink to="/newUser">
                        <ButtonGreenDark>New Employee</ButtonGreenDark>
                    </CustomLink>
                    


                    <SelectStyled name="order">
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