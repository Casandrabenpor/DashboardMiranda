import { BsTelephone } from 'react-icons/bs';
import { BsChatTextFill } from 'react-icons/bs';
import { Content } from '../../styled/TopBarStyled';
import { useSelector } from "react-redux";
import { IdUser, ContainerUser, IdData, Text, IdName, IdPhone, Hr, Subtext, CustomButtonBed } from "../../styled/BookingUserStyled";

export const GuestDetailUser = (props) => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
        <Content sideBarActivated={sideBarActivated}>
            <ContainerUser>
                <CustomButtonBed>
                    <ion-icon name="bed-outline"></ion-icon>
                </CustomButtonBed>
                <IdUser>
                    <IdName>
                        <h3>h</h3>
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
                    <Text>dd</Text>
                    <IdPhone>
                        <BsTelephone />
                        <button><BsChatTextFill /> Send Message</button>
                    </IdPhone>
                </IdUser>
            </ContainerUser>
            <IdData>
                <div>
                    <Subtext>Check In</Subtext>
                    <p>dd</p>
                </div>
                <div>
                    <Subtext>Check Out</Subtext>
                    <p>ss</p>
                </div>

            </IdData>
            <Hr></Hr>
        </Content>
    )
}