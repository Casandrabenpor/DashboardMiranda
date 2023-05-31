import styled from "styled-components";
import { colors } from "./theme";


export const ContainerUser = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2em;
`;
export const Text = styled.p`
    color:${colors.primary};
    font-size: 14px;
`;
export const IdName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5em;

`;
export const IdPhone = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2em;
    align-items: center;
   
`;

export const IdUser = styled.div`
    display: flex;
    flex-direction: column;
  button{
    background-color: ${colors.greenTwo};
    color: ${colors.white};
    border-radius: 12px;
    width: 15em;
    height: 4em;
  }
  
`;
export const IdData = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20em;
`;
export const Hr = styled.hr`
        border-bottom: 1px solid rgb(121, 146, 131);
`;