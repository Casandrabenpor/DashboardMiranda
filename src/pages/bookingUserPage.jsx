import { GuestDetailUser } from "../components/GuestDetail/GuestDetailUser";
import { Nav } from "../components/nav";
import { TopBar } from "../components/topBar";
import {GuestDetailRoom} from "../components/GuestDetail/GuestDetailRoom";
import { SwiperDetail } from "../components/GuestDetail/SwiperDetail";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';


export const BookingsUserPage = () => {
    const location = useLocation()
    const bookingId = location.pathname.replace("/BookingsUser/","")

    const bookings = useSelector(state => state.booking.data);
    const booking = bookings.find(booking => booking.id === bookingId);

    return (
        <>
            <TopBar />
            <Nav />
            <SwiperDetail/>
            <GuestDetailUser booking={booking} />
            <GuestDetailRoom/>
           
        </>
    )
}