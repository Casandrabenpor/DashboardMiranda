import { Content } from '../styled/TopBarStyled';
import { useSelector } from "react-redux";

export const GuestDetailRoom = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
        <Content sideBarActivated={sideBarActivated}>
            <div>
                <p>Room info</p>
                <h3>Deluxe Z - 002424</h3>
                <p>Price</p>
                <h3>$145</h3> <p>/night</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p>Facilities</p>
                <div>
                    <button>3 Bed Space</button>
                    <button>24 Hours Guard</button>
                    <button>Free Wifi</button>
                </div>
                <div>
                    <button>2 Bathroom</button>
                    <button>Air Conditioner</button>
                    <button>Television</button>
                </div>
            </div>
        </Content>
    );
};