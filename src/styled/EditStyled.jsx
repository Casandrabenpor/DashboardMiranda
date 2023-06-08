import styled from "styled-components";
import { colors } from "../styled/theme";

export const Container = styled.div`
    box-shadow: 0px 16px 30px #00000014;
    border-radius: 12px;
    width: 70%;
    margin-left: 15%;
`;
export const FormTitle = styled.h1`
    text-align: center;
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2em;
    label{
        display: flex;
        flex-direction: row;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    input{
       border-bottom: 1px solid ${colors.grey};
       border-left: none;
       border-top:none;
       border-right:none;
       text-align: center;
       width: 50%;
       margin-left: 25%;
  
    }
`;
export const Button = styled.input`
    cursor: pointer;
    color: ${colors.green};
    width: 20em;
    padding: 1em 2em;
    background-color: rgb(235, 241, 239);
    border: none;
    border-radius: 12px;
    margin-left: 40%;
`;
export const Select = styled.select`
    background-color: #eee;
    border: none;
    outline: none;
    padding: 5px 10px;
    width: 150px;
    text-align: center;
    display: flex;
    margin-left: 45%;
`;