import React from 'react';
import { useTypedSelector } from '../app/store';
import {
  SelectStyled,
  ButtonGreenDark,
  StyledSearchSelect,
  StyledBtnRoom,
} from '../styled/ButtonStyled';
import { Content, CustomLink } from '../styled/TopBarStyled';

export const SelectRoom = () => {
  const sideBarActivated = useTypedSelector((state) => state.sidebar.activated);
  return (
    <Content sideBarActivated={sideBarActivated}>
      <StyledSearchSelect>
        <StyledBtnRoom>
          <CustomLink to="/newRoom">
            <ButtonGreenDark>New Room</ButtonGreenDark>
          </CustomLink>

          <SelectStyled name="order">
            <option value="room_number">Room Number</option>
            <option value="price">Price</option>
            <option value="status">Status</option>
          </SelectStyled>
        </StyledBtnRoom>
      </StyledSearchSelect>
    </Content>
  );
};
