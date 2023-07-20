import sea from '../assets/sea.jpg';
import { TableContainer, IonIconCss, RedIcon } from '../styled/TableStyled';
import { ButtonRed } from '../styled/ButtonStyled';
import { Content, CustomLink } from '../styled/TopBarStyled';
import { useEffect, useState } from 'react';
import { downloadRooms } from '../features/Room/roomApi';
import { deleteRoom } from '../features/Room/roomApi';
import { useTypedDispatch, useTypedSelector } from '../app/store';
import { Room } from '../features/Room/Room';
import React from 'react';
import { IonIcon } from '@ionic/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TableRoom = () => {
  // Funcion para sacar del json [] a la tabla

  const sideBarActivated = useTypedSelector((state) => state.sidebar.activated);
  const rooms = useTypedSelector((state) => state.room.filteredData);
  const status = useTypedSelector((state) => state.room.status);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(downloadRooms());
    }
  }, [status, dispatch]);
  //Para eliminar rooms
  const handleDeleteRoom = (e: any, room: Room) => {
    e.preventDefault();
    dispatch(deleteRoom(room));
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
      <ToastContainer theme="colored" />
      <TableContainer>
        <tbody>
          <tr>
            <th>Photo</th>
            <th>Room Number</th>
            <th>ID</th>
            <th>Room Type</th>
            <th>Amenities</th>
            <th>Price</th>
            <th>Offer Price </th>
            <th>Status</th>
          </tr>
          {rooms.map((room) => (
            <tr key={room.room_id}>
              <td>
                <img src={sea} alt="sea" width={100} height={100} />
              </td>
              <td>
                {' '}
                <CustomLink to="/bookingRoom">{room.room_number}</CustomLink>
              </td>
              <td>{room.room_id}</td>
              <td>{room.bed_type}</td>
              <td>
                {Array.isArray(room.amenities)
                  ? room.amenities.map((amenitie) => `${amenitie} `)
                  : []}
              </td>
              <td>{room.rate}</td>
              <td>{room.offer_price}</td>
              {/* <td>{
                            room.status === 'Occupied'
                                ? <ButtonRed type="button">Occupied</ButtonRed>
                                : <ButtonGreen type="button">Available</ButtonGreen>
                        }
                        </td> */}

              <td>
                <ButtonRed
                  color={room.status === 'Available' ? '#5AD07A' : '#E23428 '}
                >
                  {room.status}
                </ButtonRed>
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
                      <CustomLink to={`/rooms/edit/${room.room_id}`}>
                        <IonIcon name="create-outline"></IonIcon>
                      </CustomLink>
                      <RedIcon>
                        <IonIcon
                          name="trash-outline"
                          onClick={(e) => handleDeleteRoom(e, room)}
                        ></IonIcon>
                      </RedIcon>
                    </>
                  )}
                </IonIconCss>
              </td>
            </tr>
          ))}
          ;
        </tbody>
      </TableContainer>
    </Content>
  );
};

export default TableRoom;
