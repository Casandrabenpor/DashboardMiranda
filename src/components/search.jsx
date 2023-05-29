import styled from "styled-components";
import { colors } from "../styled/theme";

export const Input = styled.input`
    padding: 1em 2em;
    border-radius: 12px;
    color: rgb(19, 88, 70);
    border: 1px solid ${colors.greenTwo};
    margin-left: 50%;
    margin-top: 5%;
 
`;

export const Search = () => {
    return (
        <div>
            <Input placeholder="Search..." />
        </div>
    );
};
