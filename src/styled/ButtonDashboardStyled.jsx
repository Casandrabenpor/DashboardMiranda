import styled from "styled-components";
import { colors } from "./theme";

export const DisplayDashboard = styled.div`
display:flex;
flex-direction:row;
gap:2em;
justify-content:center;

`;
export const ButtonDashboard = styled.div`
margin-top:5%;
width:20%;
height:20vh;
background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 4px;
    border-radius: 12px;
& > p {
    font-family: 'Poppins';
    color: ${colors.greyTwo};
  }
`;

export const Number = styled.p`
color:black;
font-family:30px;
`;
