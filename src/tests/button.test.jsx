import { screen, render, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';
import React from "react";
import '@testing-library/jest-dom';
import 'jest-styled-components'

import { ButtonRed } from "../styled/ButtonStyled";

afterEach(cleanup);

test("The component show the right color green", () => {
  const roomStatus = "Available";
  const tree = renderer.create(<ButtonRed status={"#5AD07A"}>{roomStatus}</ButtonRed>).toJSON();
  expect(tree).toHaveStyleRule("color", "#5AD07A");
})


test("The component show the right color red", () => {
  const roomStatus = "Occupied";
  const tree = renderer.create(<ButtonRed status={"#E23428"}>{roomStatus}</ButtonRed>).toJSON();

  expect(tree).toHaveStyleRule("color", "#E23428");
})


