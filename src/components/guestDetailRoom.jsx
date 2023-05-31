import { Content } from '../styled/TopBarStyled';
import { useSelector } from "react-redux";

export const GuestDetailRoom = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return(
   <Content sideBarActivated={sideBarActivated}>
    <div>
<p>Room info</p>
    </div>
   </Content>
    );
};