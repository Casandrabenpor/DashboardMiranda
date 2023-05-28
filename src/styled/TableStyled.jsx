import styled from "styled-components";
import { colors } from "./theme";

export const TableContainer = styled.table`
  margin-top: 10%;
  width: 100%;
  min-width: 800px;
  
  th, td {
    padding: 10px;
    text-align: left;
  }
`;

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
    background: #eef9f2;
  }
`;
