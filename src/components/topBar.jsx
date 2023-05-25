import Logo from "../assets/logo.png";
import { TopBarContainer, CustomLink, LogoTitle, LogoText,LogoContainer,CustomList } from "../styled/TopBarStyled";


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
      </LogoContainer>
      <CustomList>
        <li key="dashboard">
          <CustomLink to="/">Dashboard</CustomLink>
        </li>
        <li key="bookings">
          <CustomLink to="/bookings">Bookings</CustomLink>
        </li>
        <li key="rooms">
          <CustomLink to="/rooms">Rooms</CustomLink>
        </li>
        <li key="contact">
          <CustomLink to="/contact">Contact</CustomLink>
        </li>
        <li key="users">
          <CustomLink to="/users">Users</CustomLink>
        </li>
      </CustomList>
    </TopBarContainer>
  );
};

