import { SelectStyled, StyledSearchSelect, ButtonGreenDark ,StyledBtnRoom} from "../styled/ButtonStyled";
import { Content } from '../styled/TopBarStyled';
import { useSelector } from "react-redux";


export const SelectRoom = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
        <Content sideBarActivated={sideBarActivated}>
            <StyledBtnRoom>
            <ButtonGreenDark>New Room</ButtonGreenDark>
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