import styled from "styled-components";
import { colors } from "../styled/theme";
import { ButtonGreenDark } from "../styled/ButtonStyled";
import { CustomLink, Content } from '../styled/TopBarStyled';
import { useSelector } from "react-redux";

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

export const Search = () => {
    return (
        <div>
            <Input placeholder="Search..." />

        </div>
    );
};
export const SearchDifferent = () => {
    const sideBarActivated = useSelector(state => state.sidebar.activated);
    return (
        <Container>
        <Content sideBarActivated={sideBarActivated}>
            <InputWithDifferentStyle placeholder="Search ..." />
            <CustomLink to="/newContact">
                <ButtonGreenDark>New Contact</ButtonGreenDark>
            </CustomLink>
        </Content>
        </Container>

    );
};

