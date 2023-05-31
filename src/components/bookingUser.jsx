import person1 from "../assets/person1.jpg";
import { BsTelephone } from 'react-icons/bs';
import { Content } from '../styled/TopBarStyled';
import { useSelector } from "react-redux";
export const BookingsUser = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
        <Content sideBarActivated={sideBarActivated}>
            <div>
                <img src={person1} alt="person photo" width={200} height={200} />
                <h3>	Dimitri Wyllt</h3>
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="19" r="1"></circle><circle cx="12" cy="5" r="1"></circle></svg>
                <p>ID 1234124512551</p>
                <BsTelephone />
                <button>Send Message</button>
            </div>
            <div>
                <p>Chech In</p>
                <p>23/05/2023</p>
                <p>Check Out</p>
                <p>23/05/2023</p>
                <hr></hr>
            </div>
        </Content>
    )
}