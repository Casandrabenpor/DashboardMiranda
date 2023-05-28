import styled from "styled-components";
import { colors } from "./theme";

export const ContainerCustomers = styled.div`
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 20px;
border: 1px solid #EBEBEB;
`;
export const CardsCustomers = styled.div`
display: flex;
flex-direction: row;
gap: 2em;
border-radius: 20px;
padding: 2em;
`;
export const Image = styled.div`
display: flex;
flex-direction: row;
gap: 2em;

`;
export const Img = styled.img`
border-radius:8px ;
`;

export const GreenIcon = styled.span`
    color: ${colors.green};
`;



export const RedIcon = styled.span`
    color: ${colors.red};
`;