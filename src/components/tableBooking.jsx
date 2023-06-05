import person from "../assets/person.jpg";
import { TableContainer } from "../styled/TableStyled";
import { Button, ButtonRed, ButtonGreen, ButtonYellow } from "../styled/ButtonStyled";
import { Content, CustomLink } from '../styled/TopBarStyled';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadBooking } from "../features/jsonSlice/fileDownloadSlice";
import { deleteBooking } from "../features/jsonSlice/bookingSlice";

const Table = () => {
    // Funcion para sacar del json [] a la tabla

    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const bookings = useSelector(state => state.booking.data);
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
    const handleDeleteBooking = (e, booking) => {
        e.preventDefault();
        dispatch(deleteBooking(booking));
    }
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
                        <td><button onClick={e => handleDeleteBooking(e, booking)}>x</button></td>
                        <CustomLink to={`/bookings/edit/${booking.id}`}>
                           <td><button>Edit</button></td>
                           </CustomLink>
                    </tr>)}


            </TableContainer>
        </Content>
    );
};

export default Table;
