import { ContainerTabsMenu,Button } from "../styled/TabsMenuStyled";
import { Content } from '../styled/TopBarStyled';
import { useSelector } from "react-redux";
export const TabsMenuRoom = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
        <Content sideBarActivated={sideBarActivated}>
            <ContainerTabsMenu>
                <Button type="button">All Rooms</Button>
                <Button type="button">Available Rooms</Button>
                <Button type="button">Occupied Rooms</Button>
                
               
            </ContainerTabsMenu>
        </Content>
    );
};