import { SelectStyled, StyledSearchSelect, ButtonGreenDark ,StyledBtnRoom} from "../styled/ButtonStyled";
import { Content,CustomLink } from '../styled/TopBarStyled';
import { useSelector } from "react-redux";


export const SelectRoom = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
        <Content sideBarActivated={sideBarActivated}>
            <StyledBtnRoom>
            <CustomLink to="/newRoom">
            <ButtonGreenDark>New Room</ButtonGreenDark>
            </CustomLink>
            <StyledSearchSelect>

                <SelectStyled name="order">
                    <option value="room_number">Room Number</option>
                    <option value="price" >
                        Price
                    </option>
                    <option value="status">
                        Status
                    </option>


                </SelectStyled>
            </StyledSearchSelect>
            </StyledBtnRoom>
        </Content>
    )

};