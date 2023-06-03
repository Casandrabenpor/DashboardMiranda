import person from "../assets/person.jpg";
import { TableContainer } from "../styled/TableStyled";
import { Button, ButtonRed, ButtonGreen,ButtonYellow } from "../styled/ButtonStyled";
import { Content, CustomLink } from '../styled/TopBarStyled';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadBooking } from "../features/jsonSlice/fileDownloadSlice";

const Table = () => {
    // Funcion para sacar del json [] a la tabla

    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const booking = useSelector(state => state.booking.data);
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
                        
                        <td>
                       
                            {bookings.guest}
                            <CustomLink to={`/BookingsUser/${bookings.id}`}>
                            <div className="subrow">
                                #{bookings.id}
                            </div>
                            </CustomLink>
                        </td>
                        <td>{bookings.order_date}</td>
                        <td>
                            {bookings.check_in}
                            <div>
                                {bookings.check_in_hour}
                            </div>
                        </td>
                        <td>
                            {bookings.check_out}
                            <div>
                                {bookings.check_out_hour}
                            </div>
                        </td>
                        <td>
                            <Button type="button">View Notes</Button>
                        </td>
                        <td>{bookings.room_type}-{bookings.room_number}</td>
                        <td>
                            {GetStatus(bookings.status)}
                        </td>

                    </tr>)}


            </TableContainer>
        </Content>
    );
};

export default Table;
