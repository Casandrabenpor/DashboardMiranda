import { TableContainer } from "../styled/TableStyled";
import { Button} from "../styled/ButtonStyled";
import { Content } from '../styled/TopBarStyled';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadContact } from "../features/jsonSlice/fileDownloadSlice";
const TableContact = () => {

    // Funcion para sacar del json [] a la tabla

    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const contactUser = useSelector(state => state.contact.data);
    const status = useSelector(state => state.contact.status);
    const dispatch = useDispatch();
    useEffect(() => {
        if (status === "idle") {
            dispatch(downloadContact("mockContact.json"));
        }
    }, [status, dispatch]);
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
                {contactUser.map(contact =>
                    <tr>
                        <td>{contact.order_id}</td>
                        <td>{contact.date}</td>
                        <td>{contact.customer}</td>
                        <td>{contact.comment}</td>
                        <td>
                            <Button type="button">Archive</Button>
                        </td>
                    </tr>
                )}


            </TableContainer>
        </Content>
    );
};

export default TableContact;
