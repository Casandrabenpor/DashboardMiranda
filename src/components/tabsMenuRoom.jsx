import { ContainerTabsMenu, Button } from "../styled/TabsMenuStyled";
import { Content } from '../styled/TopBarStyled';
import { useSelector, useDispatch } from "react-redux";
import {filteredAll, filteredAvailable, filteredOccupied } from "../features/Room/roomSlice";


export const TabsMenuRoom = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const dispatch = useDispatch();

    
    const handleShowAll = () => {
        dispatch(filteredAll());
    };


    const handleShowAvailable = () => {
        dispatch(filteredAvailable());
    };

    const handleShowOccupied = () => {
        dispatch(filteredOccupied());
    };
    return (
        <Content sideBarActivated={sideBarActivated}>
            <ContainerTabsMenu>
                <Button type="button" onClick={handleShowAll} >All Rooms</Button>
                <Button type="button" onClick={handleShowAvailable}>Available Rooms</Button>
                <Button type="button" onClick={handleShowOccupied}>Occupied Rooms</Button>


            </ContainerTabsMenu>
        </Content>
    );
};