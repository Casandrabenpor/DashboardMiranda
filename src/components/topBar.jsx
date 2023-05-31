import Logo from "../assets/logo.png";
import Photo from "../assets/casandra.jpg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { SideBar, CustomLink, LogoTitle, LogoText, LogoContainer, CustomList, ContainerPhoto, Footer } from "../styled/TopBarStyled";
import { useDispatch, useSelector } from "react-redux";
import { TbLayoutDashboard } from 'react-icons/tb';
import { MdVpnKey } from 'react-icons/md';
import { selectUser } from "../features/loginSlice/userSlice";

export const TopBar = () => {
  const sideBarActivated = useSelector(state => state.sidebar.activated);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    sideBarActivated ?
      <SideBar>
        <LogoContainer>
          <CustomLink to="/">
            <img src={Logo} alt="Logo" width={100} height={100} />
          </CustomLink>
          <div>
            <LogoTitle>travl</LogoTitle>
            <LogoText>Hotel Admin Dashboard</LogoText>
          </div>

        </LogoContainer>
        <CustomList>

          <li key="dashboard">
            <TbLayoutDashboard />
            <CustomLink to="/">Dashboard</CustomLink>
          </li>
          <li key="rooms">
            <MdVpnKey />
            <CustomLink to="/rooms">Room</CustomLink>
          </li>
          <li key="bookings">
            {/* <FontAwesomeIcon icon={faCalendarCheck} /> */} <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 48 48"
            >
              <path d="m21.65 36.6-6.9-6.85 2.1-2.1 4.8 4.7 9.2-9.2 2.1 2.15ZM9 44q-1.2 0-2.1-.9Q6 42.2 6 41V10q0-1.2.9-2.1Q7.8 7 9 7h3.25V4h3.25v3h17V4h3.25v3H39q1.2 0 2.1.9.9.9.9 2.1v31q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V19.5H9V41Zm0-24.5h30V10H9Zm0 0V10v6.5Z" />
            </svg>
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
        <ContainerPhoto>
          <img src={Photo} alt="photo" width={150} height={100} />
          {/* <p>{user.email}
          {user.name}
          
          </p> */}
          <h3>Casandra Bennassar</h3>
          <p>casandra@gmail.com</p>
          <button>Contact Us</button>
        </ContainerPhoto>
        <Footer>
          <h5>Travl Hotel Admin Dashboard</h5>
          <p>© 2023 All Rights Reserved</p>
          <p>Made with ♥ by Casandra</p>
        </Footer>
      </SideBar>
      :
      <></>
  );
};

