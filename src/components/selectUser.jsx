import { SelectStyled, StyledSearchSelect, ButtonGreenDark ,StyledBtnUser} from "../styled/ButtonStyled";
import { Content } from '../styled/TopBarStyled';
import { useSelector } from "react-redux";
import { Search } from "../components/search";


export const SelectUser = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
        <Content sideBarActivated={sideBarActivated}>
            <StyledBtnUser>
            <ButtonGreenDark>New Employee</ButtonGreenDark>
            <Search/>
                <StyledSearchSelect>

                    <SelectStyled name="order">
                        <option value="date" >
                            Start Date
                        </option>
                        <option value="name">
                            Name
                        </option>


                </SelectStyled>
            </StyledSearchSelect>
            </StyledBtnUser>
        </Content>
    )

};