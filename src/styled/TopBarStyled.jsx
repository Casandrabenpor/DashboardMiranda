import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./theme";


export const SideBar = styled.div`

  box-shadow: 0px 3px 10px #00000005;
  display: flex;
  flex-direction:column;
  background: ${colors.white};
  height: 100vh;
  width: 15%;
  padding: 2em;
  top: 0;
  left: 0;
  overflow-x: hidden;
  position: fixed;
`;
export const ContainerNav = styled.div`
 
    display: flex;
    align-items: center;
    justify-content: space-between; 
    flex-direction: row;

    p{
      font-size: 28px;
      font-weight: 600;
    }
  
  `;
export const Burger = styled.div`
    cursor: pointer;
  `

export const Content = styled.div`
width: ${(props) => props.sideBarActivated ? "85%" : "100%"}; 
margin-left:${(props) => props.sideBarActivated ? "15%" : "0%"};
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
align-items: center;
`;
export const CustomList = styled.ul`
  margin-top: 20%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 3em;

  li{
    display: flex;
    gap: 1rem;
    &:hover {
   
    border-left:  solid ${colors.red}; 
    border-radius: 0px 6px 6px 0px;
   color: ${colors.red};
 }
  }

`;


export const CustomLink = styled(Link)`
  text-decoration: none;
  color: ${colors.primary};
  font-family:"Poppins";
  

  &:hover {
    border-bottom: 2px solid red;
    color: ${colors.red};
   
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
export const ContainerPhoto = styled.div`
 background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 20px 30px #00000014;
display: flex;
flex-direction: column;
align-items: center;
padding: 3rem;
h3{
  color:${colors.blackThree};
  font-size:16px;
  font-family:"Poppins";
}
p{
  color:${colors.whiteTwo};
  font-size: 12px;
  font-family:"Poppins";
}
button{
  width: 10em;
    height: 5vh;
  cursor: pointer;
  background-color: ${colors.whiteThree};
  color: ${colors.greenTwo};
  background: #EBF1EF 0% 0% no-repeat padding-box;
  border-radius: 8px;
  border: none;
  font-family:"Poppins";
}
`;
export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: center;
  h5{
    font-size: 16px;
    color:${colors.black};
    font-family:"Poppins";
  }
  p{
    color:${colors.primary};
    font-size: 14px;
    font-family:"Poppins";
  }
`;