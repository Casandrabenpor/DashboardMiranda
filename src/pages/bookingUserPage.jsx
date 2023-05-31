import { GuestDetailUser } from "../components/GuestDetailUser";
import { Nav } from "../components/nav";
import { TopBar } from "../components/topBar";
import {GuestDetailRoom} from "../components/guestDetailRoom";
export const BookingsUserPage = () => {
    return (
        <>
            <TopBar />
            <Nav />
            <GuestDetailUser />
            <GuestDetailRoom/>
        </>
    )
}