import { IconNav, ContainerNav, Content, CustomLink, Burger } from "../styled/TopBarStyled";
import { toggle } from "../features/sideBarSlice";
import { useDispatch, useSelector } from "react-redux";
import { GiHamburgerMenu } from 'react-icons/gi';

export const Nav = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const dispatch = useDispatch();
    const toggleSideBar = (event) => {
        event.preventDefault();
        dispatch(toggle())
    }

    return (
        <Content sideBarActivated={sideBarActivated}>
            <ContainerNav>
                <Burger>
                    <GiHamburgerMenu onClick={toggleSideBar} />
                </Burger>
                <p>Dashboard</p>
                <IconNav>
                    {/* <ion-icon name="mail-outline"></ion-icon>
            <ion-icon name="notifications-outline"></ion-icon> */}
                    <ion-icon name="mail-outline"></ion-icon>
                    <ion-icon name="notifications-outline"></ion-icon>
                    <CustomLink to="/login">
                        <ion-icon name="log-out-outline"></ion-icon>
                    </CustomLink>
                </IconNav>
            </ContainerNav>
        </Content>

    );
};