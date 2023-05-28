import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { Nav,IconNav, TopBarContainer, CustomLink, LogoTitle, LogoText, LogoContainer, CustomList } from "../styled/TopBarStyled";


export const TopBar = () => {
  return (
    <TopBarContainer>
      <LogoContainer>
        <CustomLink to="/">
          <img src={Logo} alt="Logo" width={50} height={50} />
        </CustomLink>
        <div>
          <LogoTitle>travl</LogoTitle>
          <LogoText>Hotel Admin Dashboard</LogoText>
        </div>
        <Nav>
          <p>Dashboard</p>
          <IconNav>
          {/* <ion-icon name="mail-outline"></ion-icon>
            <ion-icon name="notifications-outline"></ion-icon> */}
            <ion-icon name="mail-outline"></ion-icon>
            <ion-icon name="notifications-outline"></ion-icon>
            <ion-icon name="log-out-outline"></ion-icon>
          </IconNav>
        </Nav>
      </LogoContainer>
      <CustomList>

        <li key="dashboard">
        <ion-icon name="extension-puzzle-outline"></ion-icon>
          <CustomLink to="/">Dashboard</CustomLink>
        </li>
        <li key="rooms">
        <ion-icon name="key-outline"></ion-icon>
          <CustomLink to="/rooms">Room</CustomLink>
        </li>
        <li key="bookings">
        <FontAwesomeIcon icon={faCalendarCheck} />
          <CustomLink to="/bookings">Bookings</CustomLink>
        </li>
        <li key="contact">
        <ion-icon name="person-outline"></ion-icon>
          <CustomLink to="/contact">Contact</CustomLink>
        </li>
        <li key="users">
        <ion-icon name="extension-puzzle-outline"></ion-icon>
          <CustomLink to="/users">Users</CustomLink>
        </li>
      </CustomList>
    </TopBarContainer>
  );
};

