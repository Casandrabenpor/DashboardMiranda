import { TopBar } from "../components/topBar";
import { BtnDashboard } from "../components/buttonDashboard";
import { Calendar } from "../components/calendar";
import { BookingData } from "../components/bookingData";
import  {Customers}  from "../components/customers";
import { Nav } from "../components/nav";
export const Dashboard = () =>{
    return(
        <>
        <TopBar/>
        <Nav/>
        <BtnDashboard/>
        <Calendar/>
        <BookingData/>
        <Customers showTitle={true} />
        </>
    )
}