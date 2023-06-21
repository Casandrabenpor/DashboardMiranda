import { TableContainer, IonIconCss, RedIcon } from "../styled/TableStyled";
import { Button } from "../styled/ButtonStyled";
import { Content, CustomLink } from '../styled/TopBarStyled';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadContact } from "../features/Contact/contactApi";
import { deleteContact } from "../features/Contact/contactApi";
import { archiveContacts } from "../features/Contact/contactSlice";

const TableContact = () => {

    // Funcion para sacar del json [] a la tabla
    // use selector  de los createSlice
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const contactUser = useSelector(state => state.contact.filteredData);
    const status = useSelector(state => state.contact.status);
    const isArchivedViewEnabled = useSelector(state => state.contact.archiveView);
    const archivedData = useSelector(state => state.contact.archivedData);
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
    //Para archivar contacts
    const handleArchive = (e, contact) => {
        e.preventDefault();
        dispatch(archiveContacts(contact));
    }

    const data = isArchivedViewEnabled ? archivedData : contactUser;
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
                {data.map(contact =>
                    <tr>
                        <td>{contact.order_id}</td>
                        <td>{contact.date}</td>
                        <td>{contact.customer}</td>
                        <td>{contact.comment}</td>
                        {isArchivedViewEnabled
                            ? <></>
                            : <><td>
                                <Button type="button" onClick={e => handleArchive(e, contact)}>Archive</Button>
                            </td>
                                <td>
                                    <IonIconCss>
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
                                    </IonIconCss>

                                </td>
                            </>
                        }
                    </tr>
                )}


            </TableContainer>
        </Content>
    );
};

export default TableContact;
