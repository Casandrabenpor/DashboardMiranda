import { Nav } from "../components/nav";
import { TopBar } from "../components/topBar";
import { Customers } from "../components/customers";
export const Contact = () =>{
    return(
        <>
        <TopBar/>
        <Nav/>
        <Customers showTitle={false} />
        </>
    )
}