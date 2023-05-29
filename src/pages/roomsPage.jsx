import { TopBar } from "../components/topBar";
import { Nav } from "../components/nav";
import TableRoom from "../components/tableRoom";
import { SelectRoom } from "../components/selectRoom";
export const Rooms = () =>{
    return(
            <>
            <TopBar/>
            <Nav/>
            <SelectRoom />
            <TableRoom/>
            </>
        );
};