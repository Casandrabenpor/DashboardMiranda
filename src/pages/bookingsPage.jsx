import Table from "../components/table";
import { TopBar } from "../components/topBar";
import { Nav } from "../components/nav";
import {Search} from "../components/search";
export const Bookings = () => {
    return (
        <>
            <TopBar />
            <Nav/>
            <Search/>
            <Table />

        </>
    )
}