import { useState } from "react";
import logo from "../assets/logo.png";
import { ContainerLogin, Form } from "../styled/loginStyled";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Authentication/AuthenticationContext";
import { useContext } from "react";

export const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const authContext = useContext(AuthContext);
    const {  login } = authContext;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === 'casandra'
            && email === 'casandra@gmail.com'
            && password === 'test') {
                login(name,email);
            navigate("/");
        }
    };
    return (
        <ContainerLogin>
            <img src={logo} alt="logo" />
            <p>Hotel Miranda Admin Dashboard</p>

            <Form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name" >Name</label>
                <input
                    type="text"
                    placeholder="casandra"
                    id="name" name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="username" />
                <label htmlFor="email" >Email</label>
                <input
                    type="text"
                    placeholder="casandra@gmail.com"
                    id="email" name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="username" />
                <label htmlFor="password" >Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="test"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autocomplete="current-password" />
                <button type="submit" value="Login">Login</button>
            </Form>
        </ContainerLogin>
    )
}