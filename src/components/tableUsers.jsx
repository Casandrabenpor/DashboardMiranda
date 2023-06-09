import { TableContainer, IonIcon, RedIcon } from "../styled/TableStyled";
import { Content,CustomLink } from '../styled/TopBarStyled';
import { ButtonRed, ButtonGreen } from "../styled/ButtonStyled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadPeople } from "../features/jsonSlice/fileDownloadSlice";
import { deletePerson } from "../features/User/personSlice";
// Funcion para sacar del json [] a la tabla
const TableUser = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const users = useSelector(state => state.person.filteredData);
    const status = useSelector(state => state.person.status);
    const dispatch = useDispatch();
    useEffect(() => {
        if (status === "idle") {
            dispatch(downloadPeople("mockUsers.json"));
        }
    }, [status, dispatch]);
// Funcion para generar photos de avatares random
    const GenerateRandomAvatar = () =>{
      let randomNumber =  Math.floor(Math.random() * 9);
      let path = `./avatars/avatar${randomNumber}.jpg`;
      return path;
    }
    const handleDeletePerson = (e,user) =>{
        e.preventDefault();
        dispatch(deletePerson(user));
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
                    <th>Photo</th>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Start Date</th>
                    <th>Description</th>
                    <th>Contact</th>
                    <th>Status</th>
                </tr>
                {users.map(user =>
                    <tr>
                        <td><img src={GenerateRandomAvatar()} alt="photo" width={100} height={100} /></td>
                        <td>{user.name}</td>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.startDate}</td>
                        <td>{user.description} </td>
                        <td>{user.contact}</td>
                        <td>  {
                            user.status === 'inactive'
                                ? <ButtonRed type="button">INACTIVE</ButtonRed>
                                : <ButtonGreen type="button">ACTIVE</ButtonGreen>
                        }
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
                                          <CustomLink to={`/users/edit/${user.id}`}>
                                            <ion-icon name="create-outline"></ion-icon>
                                        </CustomLink>
                                        <RedIcon>
                                            <ion-icon name="trash-outline" onClick={e => handleDeletePerson(e,user)}></ion-icon>
                                        </RedIcon>

                                    </>
                                )}
                            </IonIcon>

                        </td>
                       
                    </tr>)}
            </TableContainer>
        </Content>
    );
};

export default TableUser;
