import { TableContainer, IonIconCss, RedIcon } from '../styled/TableStyled';
import { Content, CustomLink } from '../styled/TopBarStyled';
import { ButtonRed, ButtonGreen } from '../styled/ButtonStyled';
import { useEffect, useState } from 'react';
import { downloadPeople } from '../features/User/userApi';
import { deletePerson } from '../features/User/userApi';
import { IonIcon } from '@ionic/react';
import React from 'react';
import { Person } from '../features/User/Person';
import { useTypedDispatch, useTypedSelector } from '../app/store';
// Funcion para sacar del json [] a la tabla
const TableUser = () => {
  const sideBarActivated = useTypedSelector((state) => state.sidebar.activated);
  const users = useTypedSelector((state) => state.person.filteredData);
  const status = useTypedSelector((state) => state.person.status);
  const dispatch = useTypedDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(downloadPeople());
    }
  }, [status, dispatch]);
  // Funcion para generar photos de avatares random
  const GenerateRandomAvatar = () => {
    let randomNumber = Math.floor(Math.random() * 9);
    let path = `./avatars/avatar${randomNumber}.jpg`;
    return path;
  };
  const handleDeletePerson = (e: any, user: Person) => {
    e.preventDefault();
    dispatch(deletePerson(user));
  };
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
          <th>Photo</th>
          <th>Name</th>
          <th>ID</th>
          <th>Email</th>
          <th>Start Date</th>
          <th>Description</th>
          <th>Contact</th>
          <th>Status</th>
        </tr>
        {users.map(
          (user: {
            name: any;
            id: any;
            email: any;
            startDate: any;
            description: any;
            contact: any;
            status: any;
          }) => (
            <tr>
              <td>
                <img
                  src={GenerateRandomAvatar()}
                  alt="avatar"
                  width={100}
                  height={100}
                />
              </td>
              <td>{user.name}</td>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.startDate}</td>
              <td>{user.description} </td>
              <td>{user.contact}</td>
              <td>
                {' '}
                {user.status === 'inactive' ? (
                  <ButtonRed color="red" type="button">
                    INACTIVE
                  </ButtonRed>
                ) : (
                  <ButtonGreen type="button">ACTIVE</ButtonGreen>
                )}
              </td>
              <td>
                <IonIconCss>
                  <IonIcon
                    name="ellipsis-vertical-outline"
                    onMouseDown={handleIconMouseDown}
                    onMouseUp={handleIconMouseUp}
                  ></IonIcon>
                  {seeButton && (
                    <>
                      <CustomLink to={`/users/edit/${user.id}`}>
                        <IonIcon name="create-outline"></IonIcon>
                      </CustomLink>
                      <RedIcon>
                        <IonIcon
                          name="trash-outline"
                          onClick={(e) => handleDeletePerson(e, user)}
                        ></IonIcon>
                      </RedIcon>
                    </>
                  )}
                </IonIconCss>
              </td>
            </tr>
          ),
        )}
      </TableContainer>
    </Content>
  );
};

export default TableUser;
