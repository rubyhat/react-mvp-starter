import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./pages/App";

test("renders home page text", () => {
  render(<App />);
  const linkElement = screen.getByText(/header component/i);
  expect(linkElement).toBeInTheDocument();
});
