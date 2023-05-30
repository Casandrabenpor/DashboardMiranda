import { TableContainer } from "../styled/TableStyled";
import { Content } from '../styled/TopBarStyled';
import { Button, ButtonRed, ButtonGreen } from "../styled/ButtonStyled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadFile } from "../features/jsonSlice/fileDownloadSlice";
// Funcion para sacar del json [] a la tabla
const TableUser = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const users = useSelector(state => state.data.userData.data);
    const status = useSelector(state => state.data.userData.status);
    const dispatch = useDispatch();
    useEffect(() => {
        if (status === "idle") {
            dispatch(downloadFile("mockUsers.json"));
        }
    }, [status, dispatch]);
// Funcion para generar photos de avatares random
    const GenerateRandomAvatar = () =>{
      let randomNumber =  Math.floor(Math.random() * 9);
      let path = `./avatars/avatar${randomNumber}.jpg`;
      return path;
    }
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
                    </tr>)}
            </TableContainer>
        </Content>
    );
};

export default TableUser;
