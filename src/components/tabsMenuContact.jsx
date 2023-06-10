import { ContainerTabsMenu,Button } from "../styled/TabsMenuStyled";
import { Content } from '../styled/TopBarStyled';
import { useSelector,useDispatch } from "react-redux";
import { enableAllView,enableArchiveView } from "../features/Contact/contactSlice";
export const TabsMenuContact = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const dispatch = useDispatch();
 
    const handleShowAll = () =>{
        dispatch(enableAllView());
    };
    const handleShowArchive = () =>{
        dispatch(enableArchiveView());
    };
    return (
        <Content sideBarActivated={sideBarActivated}>
            <ContainerTabsMenu>
                <Button type="button" onClick={handleShowAll}>All Contacts</Button>
                <Button type="button" onClick={handleShowArchive}>Archived</Button>
            </ContainerTabsMenu>
        </Content>
    );
};