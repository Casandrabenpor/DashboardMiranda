import { ContainerData, ScheduleTitle, BookingSchedule, BookingScheduleData, Number } from '../styled/BookingDataStyled';
import Sea from "../assets/sea.jpg";
import { Content } from '../styled/TopBarStyled';
import { useSelector } from "react-redux";

export const BookingData = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
        <Content sideBarActivated={sideBarActivated}>
            <ContainerData >
                <ScheduleTitle>Recent Booking Schedule</ScheduleTitle>
                <BookingSchedule>

                    <img src={Sea} width={150} height={150} alt="sea" />
                    <div>
                        <ScheduleTitle>Queen Bed A-12324</ScheduleTitle>
                        <BookingScheduleData>
                            <p>James Sukardi</p>
                            <p>12min ago</p>
                            <Number>3</Number>
                        </BookingScheduleData>

                    </div>
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
                </BookingSchedule>
            </ContainerData >
        </Content>
    );

};