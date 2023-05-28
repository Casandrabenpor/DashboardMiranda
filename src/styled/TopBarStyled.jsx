import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./theme";

export const TopBarContainer = styled.div`
  width: 100%;
  height: 100px;
  box-shadow: 0px 3px 10px #00000005;
  display: flex;
  flex-direction:column;
  background: ${colors.white};
`;
export const Nav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  p{
    font-size: 28px;
    font-weight: 600;
  }
`;
export const IconNav = styled.div`
display: flex;
gap: 2em;
color: ${colors.greenTwo};
ion-icon{
  width: 28px;
  height: 28px;

}


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
  color: ${colors.primary};
  font-family:"Poppins";
  

  &:hover {
    border-bottom: 2px solid red;
  }
`;
export const LogoTitle = styled.h1`
  font-size: 30px;
  font-weight:700;
  color: ${colors.black};
`;

export const LogoText = styled.p`
 font-family:"Poppins";
font-size: 12px;
color: ${colors.grey};
opacity: 1;
`;

