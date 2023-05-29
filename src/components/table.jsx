import person from "../assets/person.jpg";
import { TableContainer } from "../styled/TableStyled";
import { Button,ButtonRed,ButtonGreen,ButtonGrey,ButtonBlack } from "../styled/ButtonStyled";
import { Content } from '../styled/TopBarStyled';
import { useSelector } from "react-redux";

const Table = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
         <Content sideBarActivated={sideBarActivated}>
            <TableContainer>
                <tr>
                    <th>Photo</th>
                    <th>Guest</th>
                    <th>Order Date</th>
                    <th>Check in</th>
                    <th>Check out</th>
                    <th>Special Request</th>
                    <th>Room type</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td><img src={person} alt="photo" width={100} height={100} /></td>
                    <td>Carla Dominguez 50-222-5264</td>
                    <td>17/02/2023</td>
                    <td>18/01/2023</td>
                    <td>18/01/2023</td>
                    <td>
                        <Button type="button">View Notes</Button>
                    </td>
                    <td>Single Bed</td>
                    <td>
                        <ButtonRed type="button">Booked</ButtonRed>
                    </td>
                </tr>
                <tr>
                    <td><img src={person} alt="photo" width={100} height={100} /></td>
                    <td>Carla Dominguez 50-222-5264</td>
                    <td>17/02/2023</td>
                    <td>18/01/2023</td>
                    <td>18/01/2023</td>
                    <td>
                        <Button type="button">View Notes</Button>
                    </td>
                    <td>Single Bed</td>
                    <td>
                        <ButtonGreen type="button">Available</ButtonGreen>
                    </td>
                </tr>
                <tr>
                    <td><img src={person} alt="photo" width={100} height={100} /></td>
                    <td>Carla Dominguez 50-222-5264</td>
                    <td>17/02/2023</td>
                    <td>18/01/2023</td>
                    <td>18/01/2023</td>
                    <td>
                        <Button type="button">View Notes</Button>
                    </td>
                    <td>Single Bed</td>
                    <td>
                        <ButtonGrey type="button">Pending</ButtonGrey>
                    </td>
                </tr>
                <tr>
                    <td><img src={person} alt="photo" width={100} height={100} /></td>
                    <td>Carla Dominguez 50-222-5264</td>
                    <td>17/02/2023</td>
                    <td>18/01/2023</td>
                    <td>18/01/2023</td>
                    <td>
                        <Button type="button">View Notes</Button>
                    </td>
                    <td>Single Bed</td>
                    <td>
                        <ButtonBlack type="button">Cancelled</ButtonBlack>
                    </td>
                </tr>
                <tr>
                    <td><img src={person} alt="photo" width={100} height={100} /></td>
                    <td>Carla Dominguez 50-222-5264</td>
                    <td>17/02/2023</td>
                    <td>18/01/2023</td>
                    <td>18/01/2023</td>
                    <td>
                        <Button type="button">View Notes</Button>
                    </td>
                    <td>Single Bed</td>
                    <td>Booked</td>
                </tr>
                <tr>
                    <td><img src={person} alt="photo" width={100} height={100} /></td>
                    <td>Carla Dominguez 50-222-5264</td>
                    <td>17/02/2023</td>
                    <td>18/01/2023</td>
                    <td>18/01/2023</td>
                    <td>
                        <Button type="button">View Notes</Button>
                    </td>
                    <td>Single Bed</td>
                    <td>Booked</td>
                </tr>
                <tr>
                    <td><img src={person} alt="photo" width={100} height={100} /></td>
                    <td>Carla Dominguez 50-222-5264</td>
                    <td>17/02/2023</td>
                    <td>18/01/2023</td>
                    <td>18/01/2023</td>
                    <td>
                        <Button type="button">View Notes</Button>
                    </td>
                    <td>Single Bed</td>
                    <td>Booked</td>
                </tr>
                <tr>
                    <td><img src={person} alt="photo" width={100} height={100} /></td>
                    <td>Carla Dominguez 50-222-5264</td>
                    <td>17/02/2023</td>
                    <td>18/01/2023</td>
                    <td>18/01/2023</td>
                    <td>
                        <Button type="button">View Notes</Button>
                    </td>
                    <td>Single Bed</td>
                    <td>Booked</td>
                </tr>
            </TableContainer>
        </Content>
    );
};

export default Table;
