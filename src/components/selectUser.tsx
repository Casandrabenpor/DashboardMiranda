import {
  SelectStyled,
  StyledSearchSelect,
  ButtonGreenDark,
  StyledBtnUser,
} from '../styled/ButtonStyled';
import { Content, CustomLink } from '../styled/TopBarStyled';
import { SearchUser } from './search';
import { orderUsers } from '../features/User/personSlice';
import React, { ChangeEvent } from 'react';
import { useTypedDispatch, useTypedSelector } from '../app/store';

export const SelectUser = () => {
  const sideBarActivated = useTypedSelector((state) => state.sidebar.activated);
  const dispatch = useTypedDispatch();
  const handleSelectOrder = (event: ChangeEvent<HTMLSelectElement>) => {
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
            <option value="date">Start Date</option>
            <option value="name">Name</option>
          </SelectStyled>
        </StyledBtnUser>
      </StyledSearchSelect>
    </Content>
  );
};
