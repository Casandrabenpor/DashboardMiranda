import { GuestDetailUser } from "../components/GuestDetail/GuestDetailUser";
import { Nav } from "../components/nav";
import { TopBar } from "../components/topBar";
import {GuestDetailRoom} from "../components/GuestDetail/GuestDetailRoom";
import { SwiperDetail } from "../components/GuestDetail/SwiperDetail";

export const BookingsUserPage = () => {
    return (
        <>
            <TopBar />
            <Nav />
            <SwiperDetail/>
            <GuestDetailUser />
            <GuestDetailRoom/>
           
        </>
    )
}