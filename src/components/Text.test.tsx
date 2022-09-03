import { screen, render } from "@testing-library/react";
import React from "react";
import Text from "./Text";

test("Check text returns text", () => {
  render(<Text>Hello world</Text>);
  expect(screen.getByText("Hello world")).toBeTruthy();
});

test("Loading text should not return any text", () => {
  render(<Text loading={true}>Hello world</Text>);
  expect(screen.queryByText("Hello world")).toBeNull();
});

export default {};
//css issue with jest --> also read in more detail (https://babeljs.io/docs/en/config-files)
