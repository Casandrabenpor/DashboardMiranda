import styled from 'styled-components';
import { colors } from './theme';

interface Props {
  sideBarActivated: boolean;
}
export const ContainerData = styled.div`
  margin-left: 2%;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 4px;
  padding: 1em;
  margin-top: 5%;
  gap: 1em;
  display: flex;
  flex-direction: column;
  padding: 2%;
`;
export const ScheduleTitle = styled.h4`
  font-family: 'Poppins';
  font-size: 20px;
  color: ${colors.blackTwo};
`;

export const BookingSchedule = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
`;

export const BookingScheduleData = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
`;
export const Number = styled.p`
  background: #135846 0% 0% no-repeat padding-box;
  border-radius: 12px;
  width: 53px;
  height: 53px;
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${colors.white};
  font-size: 20px;
  font-family: 'Poppins';
  font-weight: 500;
  align-items: center;
  margin-left: 58%;
`;
export const NumberRed = styled.p`
  background: ${colors.red};
  border-radius: 12px;
  width: 53px;
  height: 53px;
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${colors.white};
  font-size: 20px;
  font-family: 'Poppins';
  font-weight: 500;
  align-items: center;
`;
export const NumberYellow = styled.p`
  background: ${colors.yellow};
  border-radius: 12px;
  width: 53px;
  height: 53px;
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${colors.white};
  font-size: 20px;
  font-family: 'Poppins';
  font-weight: 500;
  align-items: center;
  margin-left: 58%;
  align-items: center;
`;
export const PositionNumber = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 54%;
`;
