import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

import { ButtonDashboard, DisplayDashboard, Number, FlippedIcon, FlippedIconTwo, IonIconBed, TextButton, IconCalendar } from '../styled/ButtonDashboardStyled';

export const BtnDashboard = () => {
  return (
    <DisplayDashboard>
      <ButtonDashboard>
        <IonIconBed>
          <ion-icon name="bed-outline"></ion-icon>
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
          <ion-icon name="push-outline"></ion-icon>
        </FlippedIcon>
        <TextButton>
          <Number>753</Number>
          <p>Check In</p>
        </TextButton>
      </ButtonDashboard>
      <ButtonDashboard>
        <FlippedIconTwo>
          <ion-icon name="push-outline"></ion-icon>
        </FlippedIconTwo>
        <TextButton>
          <Number>516</Number>
          <p>Check Out</p>
        </TextButton>
      </ButtonDashboard>
    </DisplayDashboard>
  );
};
