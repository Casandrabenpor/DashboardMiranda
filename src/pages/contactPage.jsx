import { Nav } from "../components/nav";
import { TopBar } from "../components/topBar";
import { Customers } from "../components/customers";
import { Search } from "../components/search";
import TableContact from "../components/tableContact";
export const Contact = () =>{
    return(
        <>
        <TopBar/>
        <Nav/>
        <Customers showTitle={false} />
        <Search/>
        <TableContact/>
        </>
    )
}