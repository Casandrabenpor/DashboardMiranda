import {
  ContainerData,
  ScheduleTitle,
  BookingSchedule,
  BookingScheduleData,
  Number,
  NumberRed,
  PositionNumber,
  NumberYellow,
} from '../styled/BookingDataStyled';
import Sea from '../assets/sea.jpg';
import { Content } from '../styled/TopBarStyled';
import { useTypedSelector } from '../app/store';
import React from 'react';

export const BookingData = () => {
  const sideBarActivated: boolean = useTypedSelector(
    (state) => state.sidebar.activated,
  );

  return (
    <Content sideBarActivated={sideBarActivated}>
      <ContainerData>
        <ScheduleTitle>Recent Booking Schedule</ScheduleTitle>
        <BookingSchedule>
          <img src={Sea} width={150} height={150} alt="sea" />
          <div>
            <ScheduleTitle>Queen Bed A-12324</ScheduleTitle>
            <BookingScheduleData>
              <p>James Sukardi</p>
              <p>12min ago</p>
            </BookingScheduleData>
          </div>
          <Number>3</Number>
        </BookingSchedule>
        <BookingSchedule>
          <img src={Sea} width={150} height={150} alt="sea" />
          <div>
            <ScheduleTitle>Queen Bed A-12324</ScheduleTitle>
            <BookingScheduleData>
              <p>James Sukardi</p>
              <p>12min ago</p>
            </BookingScheduleData>
          </div>
          <PositionNumber>
            <NumberRed>16</NumberRed>
            <NumberRed>17</NumberRed>
            <NumberRed>18</NumberRed>
          </PositionNumber>
        </BookingSchedule>
        <BookingSchedule>
          <img src={Sea} width={150} height={150} alt="sea" />
          <div>
            <ScheduleTitle>Queen Bed A-12324</ScheduleTitle>
            <BookingScheduleData>
              <p>James Sukardi</p>
              <p>12min ago</p>
            </BookingScheduleData>
          </div>
          <NumberYellow>20</NumberYellow>
        </BookingSchedule>
      </ContainerData>
    </Content>
  );
};
