import { ContainerData, ScheduleTitle, BookingSchedule, BookingScheduleData, BookingScheduleTitle } from '../styled/BookingDataStyled';

export const BookingData = () => {
    return (
        <ContainerData>
            <ScheduleTitle>Recent Booking Schedule</ScheduleTitle>
            <BookingSchedule>
                <img src="../assets/sea.jpg" alt="sea" />
                <BookingScheduleTitle>
                    <ScheduleTitle>Queen Bed A-12324</ScheduleTitle>

                    <BookingScheduleData>
                        <p>James Sukardi</p>
                        <p>12min ago</p>
                    </BookingScheduleData>
                </BookingScheduleTitle>
            </BookingSchedule>
            <BookingSchedule>
                <img src="../assets/sea.jpg" alt="sea" />
                <BookingScheduleTitle>
                    <ScheduleTitle>Queen Bed A-12324</ScheduleTitle>

                    <BookingScheduleData>
                        <p>James Sukardi</p>
                        <p>12min ago</p>
                    </BookingScheduleData>
                </BookingScheduleTitle>
            </BookingSchedule>
            <BookingSchedule>
                <img src="../assets/sea.jpg" alt="sea" />
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