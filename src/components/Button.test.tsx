import { screen, render } from "@testing-library/react";
import React from "react";
import Button from "./Button";

test("Check Button returns text", () => {
  render(<Button>Hello world</Button>);
  expect(screen.getByText("Hello world")).toBeTruthy();
});

test("Loading Button should not return any text", () => {
  render(<Button loading={true}>Hello world</Button>);
  expect(screen.queryByText("Hello world")).toBeNull();
});

export default {};
