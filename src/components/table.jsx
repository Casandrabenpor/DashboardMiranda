import person from "../assets/person.jpg";
import { TableContainer } from "../styled/TableStyled";
import { Button, ButtonRed, ButtonGreen, ButtonGrey, ButtonBlack,ButtonYellow } from "../styled/ButtonStyled";
import { Content } from '../styled/TopBarStyled';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadBooking } from "../features/jsonSlice/fileDownloadSlice";

const Table = () => {
    // Funcion para sacar del json [] a la tabla

    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const booking = useSelector(state => state.data.bookingData.data);
    const status = useSelector(state => state.data.bookingData.status);
    const dispatch = useDispatch();
    useEffect(() => {
        if (status === "idle") {
            dispatch(downloadBooking("mockBooking.json"));
        }
    }, [status, dispatch]);
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
                {booking.map(bookings =>
                    <tr>
                        <td><img src={person} alt="photo" width={100} height={100} /></td>
                        <td>{bookings.guest}</td>
                        <td>{bookings.id}</td>
                        <td>{bookings.order_date}</td>
                        <td>{bookings.check_in}</td>
                        <td>{bookings.check_out}</td>
                        <td>
                            <Button type="button">View Notes</Button>
                        </td>
                        <td>{bookings.room_type}</td>
                        <td>
                            {bookings.status === 'check in' ? (
                                <ButtonGreen type="button">Check In</ButtonGreen>
                            ) : (
                                bookings.status === 'booked' ? (
                                    <ButtonRed type="button">Booked</ButtonRed>
                                ) : (
                                    <ButtonYellow type="button">Pending</ButtonYellow>
                                )
                            )}
                        </td>

                    </tr>)}


            </TableContainer>
        </Content>
    );
};

export default Table;
