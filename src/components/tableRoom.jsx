import sea from "../assets/sea.jpg";
import { TableContainer, IonIcon, RedIcon } from "../styled/TableStyled";
import { ButtonRed, ButtonGreen } from "../styled/ButtonStyled";
import { Content, CustomLink } from '../styled/TopBarStyled';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadRooms } from "../features/jsonSlice/fileDownloadSlice";
import { deleteRoom } from "../features/jsonSlice/roomSlice";

const TableRoom = () => {
    // Funcion para sacar del json [] a la tabla

    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const rooms = useSelector(state => state.room.data);
    const status = useSelector(state => state.room.status);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === "idle") {
            dispatch(downloadRooms("mockRooms.json"));
        }
    }, [status, dispatch]);
    //Para eliminar rooms
    const handleDeleteRoom = (e, room) => {
        e.preventDefault();
        dispatch(deleteRoom(room));
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
                    <th>Room Number</th>
                    <th>Room ID</th>
                    <th>Room Type</th>
                    <th>Amenities</th>
                    <th>Price</th>
                    <th>Offer Price	</th>
                    <th>Status</th>
                </tr>
                {rooms.map(room =>

                    <tr>
                        <td><img src={sea} alt="photo" width={100} height={100} /></td>
                        <td>  <CustomLink to="/bookingRoom">{room.room_number}</CustomLink></td>
                        <td>{room.room_id}</td>
                        <td>{room.bed_type}</td>
                        <td>{room.amenities.map(amenitie => `${amenitie} `)}</td>
                        <td>{room.rate}</td>
                        <td>{room.offer_price}</td>
                        <td>{
                            room.status === 'Occupied'
                                ? <ButtonRed type="button">Occupied</ButtonRed>
                                : <ButtonGreen type="button">Available</ButtonGreen>
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
                                            <CustomLink to={`/rooms/edit/${room.room_id}`}>
                                                <ion-icon name="create-outline"></ion-icon>
                                            </CustomLink>
                                            <RedIcon>
                                                <ion-icon name="trash-outline" onClick={e => handleDeleteRoom(e, room)}></ion-icon>
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

export default TableRoom;
