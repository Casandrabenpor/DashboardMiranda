
import { ButtonDashboard, DisplayDashboard, Number } from '../styled/ButtonDashboardStyled';

export const BtnDashboard = () => {
  return (
    <DisplayDashboard>
      <ButtonDashboard>
        <Number>8,461</Number>
        <p>New Booking</p>
      </ButtonDashboard>
      <ButtonDashboard>
        <Number>963</Number>
        <p>Scheduled Room</p>
      </ButtonDashboard>
      <ButtonDashboard>
        <Number>753</Number>
        <p>Check In</p>
      </ButtonDashboard>
      <ButtonDashboard>
        <Number>516</Number>
        <p>Check Out</p>
      </ButtonDashboard>
    </DisplayDashboard>
  );
};
