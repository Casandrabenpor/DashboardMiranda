import { screen, render } from "@testing-library/react";
import React from "react";
import { ButtonRed, ButtonYellow, Button } from "../styled/ButtonStyled";
// import "@testing-library/jest-dom/extend-expect";


describe('Button component', () => {
  test('renders ButtonRed with the correct color style', () => {
    render(<Button/>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle(`width: 109px;`);
  });

  test('renders ButtonYellow with the correct color style', () => {
    render(<ButtonYellow />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle(`color: #FB9F44;`);
  });
});
