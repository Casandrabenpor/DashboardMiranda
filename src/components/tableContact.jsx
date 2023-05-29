import { TableContainer } from "../styled/TableStyled";
import { Button, ButtonRed, ButtonGreen, ButtonGrey, ButtonBlack } from "../styled/ButtonStyled";
import { Content } from '../styled/TopBarStyled';
import { useSelector } from "react-redux";
const TableContact = () => {
     const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
         <Content sideBarActivated={sideBarActivated}>
            <TableContainer>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Comment</th>
                    <th>Action</th>

                </tr>
                <tr>
                    <td>921410057</td>
                    <td>01/01/2020</td>
                    <td>Corabella Forri</td>
                    <td>primis in faucibus orci luctus et ultrices posuere cubilia curae</td>
                    <td>
                        <Button type="button">Archive</Button>
                    </td>
                </tr>
                <tr>
                    <td>921410057</td>
                    <td>01/01/2020</td>
                    <td>Corabella Forri</td>
                    <td>primis in faucibus orci luctus et ultrices posuere cubilia curae</td>
                    <td>
                        <Button type="button">Archive</Button>
                    </td>
                </tr>
                <tr>
                    <td>921410057</td>
                    <td>01/01/2020</td>
                    <td>Corabella Forri</td>
                    <td>primis in faucibus orci luctus et ultrices posuere cubilia curae</td>
                    <td>
                        <Button type="button">Archive</Button>
                    </td>
                </tr>
                <tr>
                    <td>921410057</td>
                    <td>01/01/2020</td>
                    <td>Corabella Forri</td>
                    <td>primis in faucibus orci luctus et ultrices posuere cubilia curae</td>
                    <td>
                        <Button type="button">Archive</Button>
                    </td>
                </tr>
            </TableContainer>
        </Content>
    );
};

export default TableContact;
