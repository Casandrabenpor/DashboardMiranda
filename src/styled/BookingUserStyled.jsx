import styled from "styled-components";
import { colors } from "./theme";

export const Container = styled.div`
  padding: 2%;
`;

export const ContainerUser = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2em;
    padding: 2%;
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
    align-items:center;
`;
export const Hr = styled.hr`
        border-bottom: 1px solid rgb(121, 146, 131);
        width: 40%;
        position: absolute;
`;
// Style guest detail room
export const Price = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

    button{
      background-color: rgb(232, 242, 239);
    color: rgb(19, 88, 70);
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 12px;
    padding: 1em;
    gap: 1em;
    cursor: pointer;
    }
`;
export const Subtext = styled.p`
  font-family: "Poppins";
  font-size: 14px;
  color:${colors.greyFour};
`;
export const SubTitle = styled.h3`
  font-family: "Poppins";
  font-size: 24px;
  color:${colors.black};
`;
export const Paragraph = styled.p`
  color:${colors.blackFour};
  font-size: 14px;
  max-width: 40%;
`;
// swiper detail
export const SwiperStyled = styled.div`
      display: flex;
    position: absolute;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 60%;
    img{
      width: 40em;
      height: 50em;
      object-fit: contain;
    }
`;
// css booking room
export const CustomButtonBed = styled.button`
  width: 15em;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  ion-icon{
   font-size:90px;
   color: green;
  }
`;

