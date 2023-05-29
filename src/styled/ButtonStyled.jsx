import styled from "styled-components";
import { colors } from "./theme";

export const Button = styled.button`
  cursor: pointer;
  border-radius: 12px;
  width: 109px;
  border: none;
  height: 48px;
  font-size: 16px;
  font-family: "Poppins";
  font-weight: 500;

  &:hover {
    background: ${colors.backgroundBtn};
  
  }
`;

export const ButtonRed = styled(Button)`
    color: ${colors.red};
    &:hover {
    background: ${colors.backgroundBtnRed};
  
  }
`;
export const ButtonGreen = styled(Button)`
    color: ${colors.green};
    &:hover {
    background: ${colors.backgroundBtnGreen};
  
  }
`;
export const ButtonGrey = styled(Button)`
    color: ${colors.greyThree};
    &:hover {
    background: ${colors.backgroundBtnWhite};
  
  }
`;
export const ButtonBlack = styled(Button)`
    color: ${colors.whiteTwo};
    &:hover {
    background: ${colors.backgroundBtnGrey};
  
  }
`;
// Select Bookings
export const SelectStyled = styled.select`
cursor: pointer;
    color: ${colors.white};
    background: #135846 0% 0% no-repeat padding-box;
border-radius: 12px;
padding: 1em 2em;
text-align: center;
font-size: 16px;
  font-family: "Poppins";
  font-weight: 500;
  
`;
export const StyledSearchSelect = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: flex-end;
  gap: 10em;
  margin-top: 2%;
`;