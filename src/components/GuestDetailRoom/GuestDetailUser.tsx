import { BsTelephone } from 'react-icons/bs';
import { BsChatTextFill } from 'react-icons/bs';
import { Content } from '../../styled/TopBarStyled';
import {
  IdUser,
  ContainerUser,
  IdData,
  Text,
  IdName,
  IdPhone,
  Hr,
  Subtext,
  CustomButtonBed,
} from '../../styled/BookingUserStyled';
import React from 'react';
import { useTypedSelector } from '../../app/store';
import { IonIcon } from '@ionic/react';

export const GuestDetailUser = () => {
  const sideBarActivated = useTypedSelector((state) => state.sidebar.activated);
  return (
    <Content $sideBarActivated={sideBarActivated}>
      <ContainerUser>
        <CustomButtonBed>
          <IonIcon name="bed-outline"></IonIcon>
        </CustomButtonBed>
        <IdUser>
          <IdName>
            <h3>Deluxe A-123</h3>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc></desc>
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
            </svg>
          </IdName>
          <Text>1</Text>
          <IdPhone>
            <BsTelephone />
            <button>
              <BsChatTextFill /> Send Message
            </button>
          </IdPhone>
        </IdUser>
      </ContainerUser>
      <IdData>
        <div>
          <Subtext>Check In</Subtext>
          <p>2023-04-25</p>
        </div>
        <div>
          <Subtext>Check Out</Subtext>
          <p>2023-04-25</p>
        </div>
      </IdData>
      <Hr></Hr>
    </Content>
  );
};
