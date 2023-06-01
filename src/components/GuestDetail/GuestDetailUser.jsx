import person1 from "../../assets/person1.jpg";
import { BsTelephone } from 'react-icons/bs';
import { BsChatTextFill } from 'react-icons/bs';
import { Content } from '../../styled/TopBarStyled';
import { useSelector } from "react-redux";
import { IdUser, ContainerUser, IdData, Text, IdName,IdPhone,Hr,Subtext } from "../../styled/BookingUserStyled";
export const GuestDetailUser = (props) => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
        <Content sideBarActivated={sideBarActivated}>
            <ContainerUser>
                <img src={person1} alt="person photo" width={200} height={200} />
                <IdUser>
                    <IdName>
                        <h3>{props.booking.guest}</h3>
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <desc></desc>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="12" cy="19" r="1"></circle>
                            <circle cx="12" cy="5" r="1"></circle>
                        </svg>
                    </IdName>
                    <Text>{props.booking.id}</Text>
                    <IdPhone>
                        <BsTelephone />
                        <button><BsChatTextFill /> Send Message</button>
                    </IdPhone>
                </IdUser>
            </ContainerUser>
            <IdData>
                <div>
                    <Subtext>Check In</Subtext>
                    <p>{props.booking.check_in}</p>
                </div>
                <div>
                    <Subtext>Check Out</Subtext>
                    <p>{props.booking.check_out}</p>
                </div>

            </IdData>
            <Hr></Hr>
        </Content>
    )
}