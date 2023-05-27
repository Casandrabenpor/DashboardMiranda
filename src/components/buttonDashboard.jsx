
import { ButtonDashboard, DisplayDashboard, Number, FlippedIcon, FlippedIconTwo } from '../styled/ButtonDashboardStyled';

export const BtnDashboard = () => {
  return (
    <DisplayDashboard>
      <ButtonDashboard>
        <ion-icon name="bed-outline"></ion-icon>
        <Number>8,461</Number>
        <p>New Booking</p>
      </ButtonDashboard>
      <ButtonDashboard>
        <Number>963</Number>
        <p>Scheduled Room</p>
      </ButtonDashboard>
      <ButtonDashboard>
        <FlippedIcon>
        <ion-icon name="push-outline"></ion-icon>
        </FlippedIcon>
        <Number>753</Number>
        <p>Check In</p>
      </ButtonDashboard>
      <ButtonDashboard>
      <FlippedIconTwo>
      <ion-icon name="push-outline"></ion-icon>
        </FlippedIconTwo>
        <Number>516</Number>
        <p>Check Out</p>
      </ButtonDashboard>
    </DisplayDashboard>
  );
};
