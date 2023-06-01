import { IconNav, ContainerNav, Content, CustomLink, Burger } from "../styled/TopBarStyled";
import { toggle } from "../features/sideBarSlice";
import { useDispatch, useSelector } from "react-redux";
import { GiHamburgerMenu } from 'react-icons/gi';
import { logout } from "../features/loginSlice/userSlice";

export const Nav = (props) => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const dispatch = useDispatch();
    
    const toggleSideBar = (event) => {
        event.preventDefault();
        dispatch(toggle());
    };
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };
 
    return (
        <Content sideBarActivated={sideBarActivated}>
            <ContainerNav>
                <Burger>
                    <GiHamburgerMenu onClick={toggleSideBar} />
                </Burger>
                <p>{props.name} </p>
                <IconNav>
                    {/* <ion-icon name="mail-outline"></ion-icon>
            <ion-icon name="notifications-outline"></ion-icon> */}
                    <ion-icon name="mail-outline"></ion-icon>
                    <ion-icon name="notifications-outline"></ion-icon>
                    <ion-icon name="log-out-outline" onClick={(e) => handleLogout(e)}></ion-icon>
                    
                </IconNav>
            </ContainerNav>
        </Content>

    );
};