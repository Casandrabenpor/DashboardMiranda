import styled from "styled-components";
import { colors } from "./theme";

export const DisplayDashboard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
  justify-content: center;
  margin-top: 10%;
 
`;

export const ButtonDashboard = styled.div`
  margin-top: 5%;
  width: 20%;
  height: 20vh;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 4px;
  border-radius: 12px;
  display: flex;
  gap: 1rem;

  p {
    font-family: 'Poppins';
    color: ${colors.greyTwo};
  }
`;

export const Number = styled.p`
  color: black;
  font-family: 30px;
`;

export const IonIconBed = styled.span`
  background-color: ${colors.backgroundRed};
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15%;
`;

export const FlippedIcon = styled.span`
  display: inline-block;
  transform: rotate(90deg);
  color: red;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundRed};
  margin-top: 15%;
`;

export const FlippedIconTwo = styled.span`
  display: inline-block;
  transform: rotate(270deg);
  color: red;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundRed};
  margin-top: 15%;
`;

export const TextButton = styled.div`
  display: flex;
  flex-direction: column;
  
`;
export const IconCalendar = styled.div`
  background-color: ${colors.red};
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15%;
  
`;