import styled from "styled-components";
import { colors } from "./theme";

export const TableContainer = styled.table`
  margin-top: 10%;
  width: 100%;
  min-width: 800px;
  background: ${colors.white} 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 30px #0000001A;
  
  th, td {
    padding: 10px;
    text-align: left;
  }
`;
export const IonIcon = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 1em;
  ion-icon{
    border: none;
    cursor: pointer;
  }
  
`;
export const RedIcon = styled.div`
color: red;
`;



