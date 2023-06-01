import { TopBar } from "../components/topBar";
import { Nav } from "../components/nav";
import TableUser from "../components/tableUsers";
import { SelectUser } from "../components/selectUser";
import { TabsMenuUsers } from "../components/tabsMenuUsers";
export const Users = () => {
    return (
        <>
            <TopBar />
            <Nav />
            <TabsMenuUsers/>
            <SelectUser/>
            <TableUser/>
        </>
    )
}