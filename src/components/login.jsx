import { useState } from "react";
import logo from "../assets/logo.png";
import { CustomLink } from "../styled/TopBarStyled";
import { ContainerLogin, Form } from "../styled/loginStyled";
import { login } from "../features/loginSlice/userSlice";
import { useDispatch } from "react-redux";

export const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        console.log("hola")
        e.preventDefault();
        dispatch(
            login({
                user:name,
                email: email,
                password: password,
                loggedIn: true,
            })
        );
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autocomplete="current-password" />
                {/* <CustomLink to="/"> */}
                <button type="submit" value="Login">Login</button>
                {/* </CustomLink> */}
            </Form>
        </ContainerLogin>
    )
}