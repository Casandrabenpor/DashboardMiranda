import { IconNav, ContainerNav } from "../styled/TopBarStyled";


export const Nav = () => {
    return (
        <div>
         <ContainerNav>
         <ion-icon name="menu-outline"></ion-icon>
          <p>Dashboard</p>
          <IconNav>
          {/* <ion-icon name="mail-outline"></ion-icon>
            <ion-icon name="notifications-outline"></ion-icon> */}
            <ion-icon name="mail-outline"></ion-icon>
            <ion-icon name="notifications-outline"></ion-icon>
            <ion-icon name="log-out-outline"></ion-icon>
          </IconNav>
        </ContainerNav>
        </div>

    );
};