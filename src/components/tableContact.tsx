import { TableContainer, IonIconCss, RedIcon } from '../styled/TableStyled';
import { Button } from '../styled/ButtonStyled';
import { Content, CustomLink } from '../styled/TopBarStyled';
import { useEffect, useState } from 'react';
import { downloadContact } from '../features/Contact/contactApi';
import { deleteContact } from '../features/Contact/contactApi';
import { archiveContacts } from '../features/Contact/contactSlice';
import { useTypedDispatch, useTypedSelector } from '../app/store';
import { Contact } from '../features/Contact/Contact';
import React from 'react';
import { IonIcon } from '@ionic/react';

const TableContact = () => {
  // Funcion para sacar del json [] a la tabla
  // use selector  de los createSlice
  const sideBarActivated = useTypedSelector((state) => state.sidebar.activated);
  const contactUser = useTypedSelector((state) => state.contact.filteredData);
  const status = useTypedSelector((state) => state.contact.status);
  const isArchivedViewEnabled = useTypedSelector(
    (state) => state.contact.archiveView,
  );
  const archivedData = useTypedSelector((state) => state.contact.archivedData);
  const dispatch = useTypedDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(downloadContact());
    }
  }, [status, dispatch]);
  //Para eliminar contactos
  const handleDeleteContact = (e: any, contact: Contact) => {
    e.preventDefault();
    dispatch(deleteContact(contact));
  };
  //Para mostrar el boton de dentro de otro boton
  const [seeButton, setSeeButton] = useState(false);

  const handleIconMouseDown = () => {
    setSeeButton(true);
  };

  const handleIconMouseUp = () => {
    setSeeButton(false);
  };
  //Para archivar contacts
  const handleArchive = (e: any, contact: Contact) => {
    e.preventDefault();
    dispatch(archiveContacts(contact));
  };

  const data = isArchivedViewEnabled ? archivedData : contactUser;
  console.log(data);
  return (
    <Content sideBarActivated={sideBarActivated}>
      <TableContainer>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Comment</th>
            <th>Action</th>
          </tr>
          {data.map((contact) => (
            <tr key={contact.contact_id}>
              <td>{contact.contact_id}</td>
              <td>{contact.date}</td>
              <td>{contact.customer}</td>
              <td>{contact.comment}</td>
              {isArchivedViewEnabled ? (
                <></>
              ) : (
                <>
                  <td>
                    <Button
                      type="button"
                      onClick={(e: any) => handleArchive(e, contact)}
                    >
                      Archive
                    </Button>
                  </td>
                  <td>
                    <IonIconCss>
                      <IonIcon
                        name="ellipsis-vertical-outline"
                        onMouseDown={handleIconMouseDown}
                        onMouseUp={handleIconMouseUp}
                      />
                      {seeButton && (
                        <>
                          <CustomLink
                            to={`/contacts/edit/${contact.contact_id}`}
                          >
                            <IonIcon name="create-outline"></IonIcon>
                          </CustomLink>
                          <RedIcon>
                            <IonIcon
                              name="trash-outline"
                              onClick={(e) => handleDeleteContact(e, contact)}
                            ></IonIcon>
                          </RedIcon>
                        </>
                      )}
                    </IonIconCss>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </TableContainer>
    </Content>
  );
};

export default TableContact;
