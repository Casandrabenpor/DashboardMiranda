import { TableContainer } from "../styled/TableStyled";
import { Content } from '../styled/TopBarStyled';
import { useSelector } from "react-redux";
import { Button, ButtonRed, ButtonGreen, ButtonGrey, ButtonBlack } from "../styled/ButtonStyled";
import person from "../assets/person.jpg";

const TableUser = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
        <Content sideBarActivated={sideBarActivated}>
            <TableContainer>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Start Date</th>
                    <th>Description</th>
                    <th>Contact</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td><img src={person} alt="photo" width={100} height={100} /></td>
                    <td>Carla Dominguez 50-222-5264</td>
                    <td>80701</td>
                    <td>rosheeryne0@wikimedia.org</td>
                    <td>18/01/2023</td>
                    <td>
                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                    </td>
                    <td>(102) 1504954</td>
                    <td>
                        <ButtonRed type="button">INACTIVE</ButtonRed>
                    </td>
                </tr>
                <tr>
                    <td><img src={person} alt="photo" width={100} height={100} /></td>
                    <td>Carla Dominguez 50-222-5264</td>
                    <td>80701</td>
                    <td>rosheeryne0@wikimedia.org</td>
                    <td>18/01/2023</td>
                    <td>
                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                    </td>
                    <td>(102) 1504954</td>
                    <td>
                        <ButtonGreen type="button">ACTIVE</ButtonGreen>
                    </td>
                </tr>
            </TableContainer>
        </Content>
    );
};

export default TableUser;
