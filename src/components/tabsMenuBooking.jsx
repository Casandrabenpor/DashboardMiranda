import { ContainerTabsMenu,Button } from "../styled/TabsMenuStyled";
import { Content } from '../styled/TopBarStyled';
import { useSelector } from "react-redux";
export const TabsMenu = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
        <Content sideBarActivated={sideBarActivated}>
            <ContainerTabsMenu>
                <Button type="button">All Bookings</Button>
                <Button type="button">Checking In</Button>
                <Button type="button">Checking Out</Button>
                <Button type="button">In Progress</Button>
            </ContainerTabsMenu>
        </Content>
    );
};