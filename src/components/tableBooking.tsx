import person from '../assets/person.jpg';
import { TableContainer, IonIconCss, RedIcon } from '../styled/TableStyled';
import {
  Button,
  ButtonRed,
  ButtonGreen,
  ButtonYellow,
} from '../styled/ButtonStyled';
import { Content, CustomLink } from '../styled/TopBarStyled';
import { useEffect, useState } from 'react';
import { downloadBooking, deleteBooking } from '../features/Booking/bookingApi';
import { useTypedDispatch, useTypedSelector } from '../app/store';
import React from 'react';
import { IonIcon } from '@ionic/react';
import { Booking } from '../features/Booking/Booking';

const Table = () => {
  // Funcion para sacar del json [] a la tabla

  const sideBarActivated = useTypedSelector((state) => state.sidebar.activated);
  const bookings = useTypedSelector((state) => state.booking.filteredData);
  const status = useTypedSelector((state) => state.booking.status);
  const dispatch = useTypedDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(downloadBooking());
    }
  }, [status, dispatch]);
  // Para los botones de colores .
  const GetStatus = (bookingStatus: string | undefined) => {
    switch (bookingStatus) {
      case 'Check In':
        return <ButtonGreen type="button">Check In</ButtonGreen>;
      case 'Check Out':
        return (
          <ButtonRed color="red" type="button">
            Check Out
          </ButtonRed>
        );
      default:
        return <ButtonYellow type="button">In Progress</ButtonYellow>;
    }
  };
  //Para eliminar bookings
  const handleDeleteBooking = (e: any, booking: Booking) => {
    e.preventDefault();
    dispatch(deleteBooking(booking));
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
        <tbody>
          <tr>
            <th>Photo</th>
            <th>Guest</th>
            <th>Order Date</th>
            <th>Check in</th>
            <th>Check out</th>
            <th>Special Request</th>
            <th>Room type</th>
            <th>Status</th>
          </tr>

          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>
                <img src={person} alt="person" width={100} height={100} />
              </td>

              <td>
                {booking.guest}
                <CustomLink to={`/BookingsUser/${booking.id}`}>
                  <div className="subrow">#{booking.id}</div>
                </CustomLink>
              </td>
              <td>{booking.order_date}</td>
              <td>
                {booking.check_in}
                <div>{booking.check_in_hour}</div>
              </td>
              <td>
                {booking.check_out}
                <div>{booking.check_out_hour}</div>
              </td>
              <td>
                <Button type="button">View Notes</Button>
              </td>
              <td>
                {booking.room_type}-{booking.room_number}
              </td>
              <td>{GetStatus(booking?.status)}</td>
              <td>
                <IonIconCss>
                  <IonIcon
                    name="ellipsis-vertical-outline"
                    onMouseDown={handleIconMouseDown}
                    onMouseUp={handleIconMouseUp}
                  />
                  {seeButton && (
                    <>
                      <CustomLink to={`/bookings/edit/${booking.id}`}>
                        <IonIcon name="create-outline"></IonIcon>
                      </CustomLink>
                      <RedIcon>
                        <IonIcon
                          name="trash-outline"
                          onClick={(e) => handleDeleteBooking(e, booking)}
                        ></IonIcon>
                      </RedIcon>
                    </>
                  )}
                </IonIconCss>
              </td>
            </tr>
          ))}
        </tbody>
      </TableContainer>
    </Content>
  );
};

export default Table;
