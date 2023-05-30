import { ContainerTabsMenu,Button } from "../styled/TabsMenuStyled";
import { Content } from '../styled/TopBarStyled';
import { useSelector } from "react-redux";
export const TabsMenuContact = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
        <Content sideBarActivated={sideBarActivated}>
            <ContainerTabsMenu>
                <Button type="button">All Contacts</Button>
                <Button type="button">Archived</Button>
                
               
            </ContainerTabsMenu>
        </Content>
    );
};