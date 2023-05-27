import { ContainerData, ScheduleTitle, BookingSchedule, BookingScheduleData, BookingScheduleTitle } from '../styled/BookingDataStyled';
import Sea from "../assets/sea.jpg";

export const BookingData = () => {
    return (
        <ContainerData>
            <ScheduleTitle>Recent Booking Schedule</ScheduleTitle>
            <BookingSchedule>
            <img src={Sea}  width={50} height={50} alt="sea" />
                <BookingScheduleTitle>
                    <ScheduleTitle>Queen Bed A-12324</ScheduleTitle>

                    <BookingScheduleData>
                        <p>James Sukardi</p>
                        <p>12min ago</p>
                    </BookingScheduleData>
                </BookingScheduleTitle>
            </BookingSchedule>
            <BookingSchedule>
                <img src={Sea}  width={50} height={50} alt="sea" />
                <BookingScheduleTitle>
                    <ScheduleTitle>Queen Bed A-12324</ScheduleTitle>

                    <BookingScheduleData>
                        <p>James Sukardi</p>
                        <p>12min ago</p>
                    </BookingScheduleData>
                </BookingScheduleTitle>
            </BookingSchedule>
            <BookingSchedule>
            <img src={Sea}  width={50} height={50} alt="sea" />
                <BookingScheduleTitle>
                    <ScheduleTitle>Queen Bed A-12324</ScheduleTitle>

                    <BookingScheduleData>
                        <p>James Sukardi</p>
                        <p>12min ago</p>
                    </BookingScheduleData>
                </BookingScheduleTitle>
            </BookingSchedule>
        </ContainerData>
    );

};