import person from "../assets/person.jpg";
import { TableContainer, IonIcon, RedIcon } from "../styled/TableStyled";
import { Button, ButtonRed, ButtonGreen, ButtonYellow } from "../styled/ButtonStyled";
import { Content, CustomLink } from '../styled/TopBarStyled';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadBooking } from "../features/jsonSlice/fileDownloadSlice";
import { deleteBooking } from "../features/Booking/bookingSlice";

const Table = () => {
    // Funcion para sacar del json [] a la tabla

    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const bookings = useSelector(state => state.booking.filteredData);
    const status = useSelector(state => state.booking.status);
    const dispatch = useDispatch();
    useEffect(() => {
        if (status === "idle") {
            dispatch(downloadBooking("mockBooking.json"));
        }
    }, [status, dispatch]);
    // Para los botones de colores .
    const GetStatus = (bookingStatus) => {
        switch (bookingStatus) {
            case "Check In":
                return <ButtonGreen type="button">Check In</ButtonGreen>;
            case "Check Out":
                return <ButtonRed type="button">Check Out</ButtonRed>;
            default:
                return <ButtonYellow type="button">In Progress</ButtonYellow>;
        }
    }
    //Para eliminar bookings
    const handleDeleteBooking = (e, booking) => {
        e.preventDefault();
        dispatch(deleteBooking(booking));
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
                    <th>Guest</th>
                    <th>Order Date</th>
                    <th>Check in</th>
                    <th>Check out</th>
                    <th>Special Request</th>
                    <th>Room type</th>
                    <th>Status</th>
                </tr>
                {bookings.map(booking =>
                    <tr>
                        <td><img src={person} alt="photo" width={100} height={100} /></td>

                        <td>

                            {booking.guest}
                            <CustomLink to={`/BookingsUser/${booking.id}`}>
                                <div className="subrow">
                                    #{booking.id}
                                </div>
                            </CustomLink>
                        </td>
                        <td>{booking.order_date}</td>
                        <td>
                            {booking.check_in}
                            <div>
                                {booking.check_in_hour}
                            </div>
                        </td>
                        <td>
                            {booking.check_out}
                            <div>
                                {booking.check_out_hour}
                            </div>
                        </td>
                        <td>
                            <Button type="button">View Notes</Button>
                        </td>
                        <td>{booking.room_type}-{booking.room_number}</td>
                        <td>
                            {GetStatus(booking.status)}
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
                                        <CustomLink to={`/bookings/edit/${booking.id}`}>
                                            <ion-icon name="create-outline"></ion-icon>
                                        </CustomLink>
                                        <RedIcon>
                                            <ion-icon name="trash-outline" onClick={e => handleDeleteBooking(e, booking)}></ion-icon>
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

export default Table;
