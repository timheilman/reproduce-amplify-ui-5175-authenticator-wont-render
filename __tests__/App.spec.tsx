import { render, screen } from "@testing-library/react-native";

import App from "../App";
import React from "react";

describe("<App />", () => {
  test("Authenticator renders", async () => {
    const { toJSON } = render(<App />);
    expect(await screen.findByText("Sign In")).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
