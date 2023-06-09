import { ContainerTabsMenu,Button } from "../styled/TabsMenuStyled";
import { Content } from '../styled/TopBarStyled';
import { useSelector, useDispatch } from "react-redux";
import { filteredAll, filteredChecking, filteredCheckout, filteredInProgress } from "../features/Booking/bookingSlice";
export const TabsMenu = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const dispatch = useDispatch();

        
    const handleShowAll = () => {
        dispatch(filteredAll());
    };


    const handleShowChecking = () => {
        dispatch(filteredChecking());
    };

    const handleShowCheckout = () => {
        dispatch(filteredCheckout());
    };
    const handleShowInProgress = () => {
        dispatch(filteredInProgress());
    };
    return (
        <Content sideBarActivated={sideBarActivated}>
            <ContainerTabsMenu>
                <Button type="button" onClick={handleShowAll}>All Bookings</Button>
                <Button type="button" onClick={handleShowChecking}>Checking In</Button>
                <Button type="button" onClick={handleShowCheckout}>Checking Out</Button>
                <Button type="button" onClick={handleShowInProgress}>In Progress</Button>
            </ContainerTabsMenu>
        </Content>
    );
};