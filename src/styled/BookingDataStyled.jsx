import styled from "styled-components";
import { colors } from "./theme";

export const ContainerData = styled.div`
      background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 4px;
`;
export const ScheduleTitle = styled.h4`
  font-family:"Poppins";
  font-size: 20px;
  color: ${colors.blackTwo};
`;


export const BookingSchedule = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
  justify-content: center;
 
`;
export const BookingScheduleTitle = styled.div`
display: flex;
flex-direction: column;

`;
export const BookingScheduleData = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;

`;