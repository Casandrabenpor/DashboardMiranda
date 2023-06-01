import styled from "styled-components";
import { colors } from "./theme";

export const ContainerModal = styled.div`
    border: 1px solid rgb(235, 235, 235);
    border-radius: 20px;
    padding: 1em;
    background-color: ${colors.backgroundBtnYellow};
    transform: translate(-50%, -50%);
    position: fixed;
  top: 50%;
  left: 50%;
    
`;
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
 
`;