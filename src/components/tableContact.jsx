import { TableContainer } from "../styled/TableStyled";
import { Button} from "../styled/ButtonStyled";
import { Content,CustomLink } from '../styled/TopBarStyled';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadContact } from "../features/jsonSlice/fileDownloadSlice";
import { deleteContact } from "../features/jsonSlice/contactSlice";
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

    const handleDeleteContact = (e,contact) =>{
        e.preventDefault();
        dispatch(deleteContact(contact));
    }
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
                        <td><button onClick={e => handleDeleteContact(e,contact)}>x</button></td>
                        <CustomLink to={`/contact/edit/${contact.order_id}`}>
                           <td><button>Edit</button></td>
                           </CustomLink>
                    </tr>
                )}


            </TableContainer>
        </Content>
    );
};

export default TableContact;
