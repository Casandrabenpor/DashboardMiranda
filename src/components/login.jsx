import logo from "../assets/logo.png";
import { ContainerLogin , Form } from "../styled/loginStyled";
export const Login = () => {
    return (
        <ContainerLogin>
            <img src={logo} alt="logo" />
            <p>Hotel Miranda Admin Dashboard</p>
            
            <Form>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <input type="submit" value="Login" />
            </Form>
        </ContainerLogin>
    )
}