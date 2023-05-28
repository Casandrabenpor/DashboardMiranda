import { IconNav, ContainerNav, Content } from "../styled/TopBarStyled";
import { toggle } from "../features/sideBarSlice";
import { useDispatch, useSelector } from "react-redux";

export const Nav = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const dispatch = useDispatch();
    const toggleSideBar = (event)  =>{
        event.preventDefault();
        dispatch(toggle())
    }

    return (
            <Content sideBarActivated={sideBarActivated}>
                <ContainerNav>
                    <ion-icon onClick={toggleSideBar} name="menu-outline"></ion-icon>
                    <p>Dashboard</p>
                    <IconNav>
                        {/* <ion-icon name="mail-outline"></ion-icon>
            <ion-icon name="notifications-outline"></ion-icon> */}
                        <ion-icon name="mail-outline"></ion-icon>
                        <ion-icon name="notifications-outline"></ion-icon>
                        <ion-icon name="log-out-outline"></ion-icon>
                    </IconNav>
                </ContainerNav>
            </Content>

    );
};