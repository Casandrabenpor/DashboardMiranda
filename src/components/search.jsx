import styled from "styled-components";
import { colors } from "../styled/theme";
import { ButtonGreenDark } from "../styled/ButtonStyled";
import { CustomLink, Content } from '../styled/TopBarStyled';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterBookings } from "../features/Booking/bookingSlice";
import { filterContacts } from "../features/Contact/contactSlice";
import { filterUsers } from "../features/User/personSlice";
export const Input = styled.input`
    padding: 1em 2em;
    border-radius: 12px;
    color: rgb(19, 88, 70);
    border: 1px solid ${colors.greenTwo};

 
`;
export const InputWithDifferentStyle = styled(Input)`
    padding: 1em 2em;
    border-radius: 12px;
    color: rgb(19, 88, 70);
    border: 1px solid ${colors.greenTwo};
     margin-right: 6%;

`;
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 60%;
`;

export const SearchBooking = () => {
    const dispatch = useDispatch();

    const handleSearchBooking = (event) => {
        event.preventDefault();
        const query = event.target.value;
        dispatch(filterBookings(query));
    };

    return (
        <div>
            <Input placeholder="Search..." onChange={handleSearchBooking} />

        </div>
    );
};
export const SearchUser = () => {
    const dispatch = useDispatch();

    const handleSearchUser = (event) => {
        event.preventDefault();
        const query = event.target.value;
        dispatch(filterUsers(query));
    };

    return (
        <div>
            <Input placeholder="Search..." onChange={handleSearchUser} />

        </div>
    );
};
export const SearchContact = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    const dispatch = useDispatch();
    
    const handleSearchContact = (event) => {
        event.preventDefault();
        const query = event.target.value;
        dispatch(filterContacts(query));
    };
    return (
        <Container>
            <Content sideBarActivated={sideBarActivated}>
                <InputWithDifferentStyle placeholder="Search ..." onChange={handleSearchContact} />
                <CustomLink to="/newContact">
                    <ButtonGreenDark>New Contact</ButtonGreenDark>
                </CustomLink>
            </Content>
        </Container>

    );
};

