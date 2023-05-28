import { ScheduleTitle } from '../styled/BookingDataStyled';
import { ContainerCustomers, CardsCustomers, Image, Img, GreenIcon, RedIcon } from '../styled/CustomersStyled';
import { Content } from '../styled/TopBarStyled';
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person from "../assets/person.jpg";
import { useSelector } from "react-redux";
export const Customers = ({ showTitle }) => {

    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
        <Content sideBarActivated={sideBarActivated}>
            {showTitle && <ScheduleTitle>Latest Review by Customers</ScheduleTitle>}
            <CardsCustomers>

                <ContainerCustomers>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <Image>
                        <Img src={person} width={100} height={100} alt="sea" />
                        <div>
                            <p>Kusnaidi Anderson</p>
                            <GreenIcon>
                                <ion-icon name="checkmark-circle-outline"></ion-icon>
                            </GreenIcon>
                            <RedIcon>
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </RedIcon>
                        </div>
                    </Image>
                </ContainerCustomers>
                <ContainerCustomers>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <Image>
                        <Img src={person1} width={100} height={100} alt="sea" />
                        <div>
                            <p>Kusnaidi Anderson</p>
                            <GreenIcon>
                                <ion-icon name="checkmark-circle-outline"></ion-icon>
                            </GreenIcon>
                            <RedIcon>
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </RedIcon>
                        </div>
                    </Image>
                </ContainerCustomers>
                <ContainerCustomers>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <Image>
                        <Img src={person2} width={100} height={100} alt="sea" />
                        <div>
                            <p>Kusnaidi Anderson</p>
                            <GreenIcon>
                                <ion-icon name="checkmark-circle-outline"></ion-icon>
                            </GreenIcon>
                            <RedIcon>
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </RedIcon>
                        </div>
                    </Image>
                </ContainerCustomers>
            </CardsCustomers>
        </Content>
    )
}