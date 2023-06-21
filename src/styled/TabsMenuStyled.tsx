import styled from 'styled-components';
import { colors } from './theme';

export const ContainerTabsMenu = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2%;
`;
export const Button = styled.button`
  color: ${colors.greenTwo};
  font-size: 16px;
  font-weight: 400;
  color: rgb(110, 110, 110);
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  background-color: #f8f8f8;
  border: none;
  font-family: 'Poppins';
  &:hover {
    border-bottom: 2px solid ${colors.greenTwo};
  }
`;
