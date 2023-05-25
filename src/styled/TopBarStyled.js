import { Link } from "react-router-dom";
import styled from "styled-components";

export const TopBarContainer = styled.div`
  width: 100%;
  height: 100px;
  box-shadow: 0px 3px 10px #00000005;
  display: flex;
  flex-direction:column;
  background: #ffffff;
`;
export const LogoContainer = styled.div`
display:flex;
flex-direction:row;
`;
export const CustomList = styled.ul`
  list-style-type: none;

`;


export const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
  

  &:hover {
    border-bottom: 2px solid red;
  }
`;
export const LogoTitle = styled.h1`
  font-size: 30px;
  font-weight:700;
  color:#212121;
`;

export const LogoText = styled.p`
 font-family:"Poppins";
font-size: 12px;
color: #5D5449;
opacity: 1;
`;

