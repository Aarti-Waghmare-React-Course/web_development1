import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders TallySuite Calculator heading", () => {
  render(<App />);
  const heading = screen.getByText(/TallySuite Calculator/i);
  expect(heading).toBeInTheDocument();
});
