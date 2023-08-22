import { Content } from '../../styled/TopBarStyled';
import {
  IdData,
  Price,
  ContainerButton,
  Subtext,
  SubTitle,
  Paragraph,
  Container,
} from '../../styled/BookingUserStyled';
import { AiOutlineWifi, AiOutlineSafetyCertificate } from 'react-icons/ai';
import React from 'react';
import { useTypedSelector } from '../../app/store';
import { IonIcon } from '@ionic/react';

export const GuestDetailRoom = () => {
  const sideBarActivated = useTypedSelector((state) => state.sidebar.activated);
  return (
    <Content $sideBarActivated={sideBarActivated}>
      <Container>
        <IdData>
          <div>
            <Subtext>Room info</Subtext>
            <SubTitle>Deluxe Z - 002424</SubTitle>
          </div>
          <div>
            <Subtext>Price</Subtext>
            <Price>
              <SubTitle>$145</SubTitle>
              <Subtext>/night</Subtext>
            </Price>
          </div>
        </IdData>

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Paragraph>
        <Subtext>Facilities</Subtext>
        <ContainerButton>
          <div>
            <button>
              <IonIcon name="bed-outline"></IonIcon>3 Bed Space
            </button>
            <button>
              <AiOutlineSafetyCertificate />
              24 Hours Guard
            </button>
            <button>
              <AiOutlineWifi />
              Free Wifi
            </button>
          </div>
          <div>
            <button>2 Bathroom</button>
            <button>Air Conditioner</button>
            <button>Television</button>
          </div>
        </ContainerButton>
      </Container>
    </Content>
  );
};
