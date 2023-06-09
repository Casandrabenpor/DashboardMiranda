import styled from "styled-components";
import { colors } from "./theme";

export const DisplayDashboard = styled.div`
   width: ${(props) => props.sideBarActivated ? "85%" : "100%"};
   margin-left:${(props) => props.sideBarActivated ? "15%" : "0%"};
  display: flex;
  flex-direction: row;
  gap: 2em;
  justify-content: center;
  margin-top: 2%;

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
  justify-content: center;

  p {
    font-family: 'Poppins';
    color: ${colors.greyTwo};
  }

  
  `;
  export const Number = styled.p`
      &&&{
        color: ${colors.black};
        font-size: 30px;
      }
  `;



export const IonIconBed = styled.span`
  cursor: pointer;
  background-color: ${colors.backgroundRed};
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15%;
  &:hover {
    background-color: ${colors.red};
    color: white;
  }

`;

export const FlippedIcon = styled.span`
 cursor: pointer;
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
  &:hover {
    background-color: ${colors.red};
    color: white;
  }

`;

export const FlippedIconTwo = styled.span`
 cursor: pointer;
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
  &:hover {
    background-color: ${colors.red};
    color: white;
  }
`;

export const TextButton = styled.div`
  display: flex;
  flex-direction: column;

`;
export const IconCalendar = styled.div`
 background-color: ${colors.backgroundRed};
 cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15%;

  &:hover {
    background-color: ${colors.red};
    color: white;
  }

`;