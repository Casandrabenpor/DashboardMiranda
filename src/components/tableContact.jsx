import { TableContainer, IonIcon, RedIcon } from "../styled/TableStyled";
import { Button } from "../styled/ButtonStyled";
import { Content, CustomLink } from '../styled/TopBarStyled';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadContact } from "../features/jsonSlice/fileDownloadSlice";
import { deleteContact } from "../features/Contact/contactSlice";

const TableContact = () => {

    // Funcion para sacar del json [] a la tabla

    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const contactUser = useSelector(state => state.contact.filteredData);
    const status = useSelector(state => state.contact.status);
    const dispatch = useDispatch();
    useEffect(() => {
        if (status === "idle") {
            dispatch(downloadContact("mockContact.json"));
        }
    }, [status, dispatch]);
    //Para eliminar contactos
    const handleDeleteContact = (e, contact) => {
        e.preventDefault();
        dispatch(deleteContact(contact));
    }
    //Para mostrar el boton de dentro de otro boton
    const [seeButton, setSeeButton] = useState(false);

    const handleIconMouseDown = () => {
        setSeeButton(true);
    };

    const handleIconMouseUp = () => {
        setSeeButton(false);
    };

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
                        <td>
                            <IonIcon>
                                <ion-icon
                                    name="ellipsis-vertical-outline"
                                    onMouseDown={handleIconMouseDown}
                                    onMouseUp={handleIconMouseUp}
                                />
                                {seeButton && (
                                    <>
                                        <CustomLink to={`/contacts/edit/${contact.order_id}`}>
                                            <ion-icon name="create-outline"></ion-icon>
                                        </CustomLink>
                                        <RedIcon>
                                            <ion-icon name="trash-outline" onClick={e => handleDeleteContact(e, contact)}></ion-icon>
                                        </RedIcon>

                                    </>
                                )}
                            </IonIcon>

                        </td>
                    </tr>
                )};


            </TableContainer>
        </Content>
    );
};

export default TableContact;
