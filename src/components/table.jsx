import person from "../assets/person.jpg";
import { TableContainer, Button } from "../styled/TableStyled";

const Table = () => {
    return (
        <div>
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
                    <td>Occupied</td>
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
                    <td>Occupied</td>
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
                    <td>Occupied</td>
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
                    <td>Occupied</td>
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
                    <td>Occupied</td>
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
                    <td>Occupied</td>
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
                    <td>Occupied</td>
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
                    <td>Occupied</td>
                </tr>
            </TableContainer>
        </div>
    );
};

export default Table;
