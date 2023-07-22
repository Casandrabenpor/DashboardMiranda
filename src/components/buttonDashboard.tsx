import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { Content } from '../styled/TopBarStyled';
import {
  ButtonDashboard,
  DisplayDashboard,
  Number,
  FlippedIcon,
  FlippedIconTwo,
  IonIconBed,
  TextButton,
  IconCalendar,
} from '../styled/ButtonDashboardStyled';
import { useTypedSelector } from '../app/store';
import React from 'react';
import { IonIcon } from '@ionic/react';

export const BtnDashboard = () => {
  const sideBarActivated: boolean = useTypedSelector(
    (state) => state.sidebar.activated,
  );

  return (
    <Content $sideBarActivated={sideBarActivated}>
      <DisplayDashboard>
        <ButtonDashboard>
          <IonIconBed>
            <IonIcon name="bed-outline" />
          </IonIconBed>
          <TextButton>
            <Number>8,461</Number>
            <p>New Booking</p>
          </TextButton>
        </ButtonDashboard>
        <ButtonDashboard>
          <IconCalendar>
            <FontAwesomeIcon icon={faCalendarCheck} />
          </IconCalendar>
          <TextButton>
            <Number>963</Number>
            <p>Scheduled Room</p>
          </TextButton>
        </ButtonDashboard>
        <ButtonDashboard>
          <FlippedIcon>
            <IonIcon name="push-outline" />
          </FlippedIcon>
          <TextButton>
            <Number>753</Number>
            <p>Check In</p>
          </TextButton>
        </ButtonDashboard>
        <ButtonDashboard>
          <FlippedIconTwo>
            <IonIcon name="push-outline" />
          </FlippedIconTwo>
          <TextButton>
            <Number>516</Number>
            <p>Check Out</p>
          </TextButton>
        </ButtonDashboard>
      </DisplayDashboard>
    </Content>
  );
};
