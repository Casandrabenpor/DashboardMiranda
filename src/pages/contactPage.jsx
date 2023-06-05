import { Nav } from "../components/nav";
import { TopBar } from "../components/topBar";
import { Customers } from "../components/customers";
import { SearchDifferent } from "../components/search";
import TableContact from "../components/tableContact";
import { TabsMenuContact } from "../components/tabsMenuContact";

export const Contact = () => {
    return (
        <>
            <TopBar />
            <Nav name="Contact" />
            <Customers showTitle={false} />
            <TabsMenuContact />
            
            <SearchDifferent />
            <TableContact />
        </>
    )
}