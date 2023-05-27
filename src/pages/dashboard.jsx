import { TopBar } from "../components/topBar";
import { BtnDashboard } from "../components/buttonDashboard";
import { Calendar } from "../components/calendar";
import { BookingData } from "../components/bookingData";
export const Dashboard = () =>{
    return(
        <>
        {/* <TopBar/> */}
        <BtnDashboard/>
        <Calendar/>
        <BookingData/>
        </>
    )
}