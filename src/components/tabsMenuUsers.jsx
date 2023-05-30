import { ContainerTabsMenu,Button } from "../styled/TabsMenuStyled";
import { Content } from '../styled/TopBarStyled';
import { useSelector } from "react-redux";
export const TabsMenuUsers = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
        <Content sideBarActivated={sideBarActivated}>
            <ContainerTabsMenu>
                <Button type="button">All Employee</Button>
                <Button type="button">Active Employee</Button>
                <Button type="button">Inactive Employee</Button>
               
            </ContainerTabsMenu>
        </Content>
    );
};