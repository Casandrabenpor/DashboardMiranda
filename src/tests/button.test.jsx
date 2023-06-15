import { screen, render ,cleanup} from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom';




import { ButtonRed } from "../styled/ButtonStyled";
 
afterEach(cleanup);

test ("El componente muestra el color correcto",() =>{
  const roomStatus = "Available";
  render (<ButtonRed status = {"#5AD07A"}>{roomStatus}</ButtonRed>);

  const button = screen.getByRole("button", {name : roomStatus});
  expect(button).toHaveStyle(`backgroundColor:"#5AD07A"`);
})
test ("El componente muestra el color correcto",() =>{
  const roomStatus = "Available";
  render (<ButtonRed status = {"#E23428"}>{roomStatus}</ButtonRed>);

  const button = screen.getByRole("button", {name : roomStatus});
  expect(button).toHaveStyle(`backgroundColor:"#E23428"`);
})

// test('El componente muestra el color correcto', () => {
//   const { container } = render(<ButtonRed theme="red"/>);
//   expect(container.firstChild).toHaveStyleRule('color', expect.stringContaining(colors.red));
// });
// describe('Button component', () => {
//   test('renders ButtonRed with the correct color style', () => {
//     render(<ButtonRed />);
//     const buttonElement = screen.getByRole('button');

//     expect(buttonElement).toBeInTheDocument();
    // expect(buttonElement.style.color)({
    //     borderRadius: '12px',
    //     width: '109px',
    //     height: '48px',
    //     fontSize: '16px',
    //     fontFamily: 'Poppins',
    //     fontWeight: '500',
    //     color: '#E23428'
    // });
  //   expect(buttonElement.style.width).toBe('109px');
  // });

  // test('renders ButtonYellow with the correct color style', () => {
  //   render(<ButtonYellow />);
  //   const buttonElement = screen.getByRole('button');
  //   expect(buttonElement).toHaveStyle(`color: #FB9F44;`);
  // });
  // test('renders ButtonRed with the correct color style', () => {
  //   const buttonElement = renderer.create(<ButtonRed theme="red" />);
  //   expect(buttonElement).toHaveStyleRule("color", colors.red);
  // });

