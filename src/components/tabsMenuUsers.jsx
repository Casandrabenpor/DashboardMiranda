import { ContainerTabsMenu,Button } from "../styled/TabsMenuStyled";
import { Content } from '../styled/TopBarStyled';
import { useSelector,useDispatch } from "react-redux";
import { filteredAll,filteredActive,filteredInactive } from "../features/User/personSlice";
export const TabsMenuUsers = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const dispatch = useDispatch();

    
    const handleShowAll = () => {
        dispatch(filteredAll());
    };


    const handleShowActive = () => {
        dispatch(filteredActive());
    };

    const handleShowInactive = () => {
        dispatch(filteredInactive());
    };
    return (
        <Content sideBarActivated={sideBarActivated}>
            <ContainerTabsMenu>
                <Button type="button" onClick={handleShowAll}>All Employee</Button>
                <Button type="button" onClick={handleShowActive}>Active Employee</Button>
                <Button type="button" onClick={handleShowInactive}>Inactive Employee</Button>
               
            </ContainerTabsMenu>
        </Content>
    );
};