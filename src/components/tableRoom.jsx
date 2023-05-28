import sea from "../assets/sea.jpg";
import { TableContainer, Button } from "../styled/TableStyled";

const TableRoom = () => {
    return (
        <div>
            <TableContainer>
                <tr>
                    <th>Photo</th>
                    <th>Room Number</th>
                    <th>Room ID</th>
                    <th>Room Type</th>
                    <th>Amenities</th>
                    <th>Price</th>
                    <th>Offer Price	</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td><img src={sea} alt="photo" width={100} height={100} /></td>
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
                    <td><img src={sea} alt="photo" width={100} height={100} /></td>
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
                    <td><img src={sea} alt="photo" width={100} height={100} /></td>
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
                    <td><img src={sea} alt="photo" width={100} height={100} /></td>
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
                    <td><img src={sea} alt="photo" width={100} height={100} /></td>
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
                    <td><img src={sea} alt="photo" width={100} height={100} /></td>
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

export default TableRoom;
