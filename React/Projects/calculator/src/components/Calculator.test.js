import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator", () => {
  test("renders calculator and buttons", () => {
    render(<Calculator selectedTheme="Blue" darkMode={false} />);
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("=")).toBeInTheDocument();
  });

  test("performs addition correctly", () => {
    render(<Calculator selectedTheme="Blue" darkMode={false} />);
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("3"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByDisplayValue("5")).toBeInTheDocument();
  });

  test("clears input with C button", () => {
    render(<Calculator selectedTheme="Blue" darkMode={false} />);
    fireEvent.click(screen.getByText("8"));
    fireEvent.click(screen.getByText("C"));
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });

  test("stores value in memory (M+ and MR)", () => {
    render(<Calculator selectedTheme="Blue" darkMode={false} />);
    fireEvent.click(screen.getByText("9"));
    fireEvent.click(screen.getByText("M+"));
    fireEvent.click(screen.getByText("C"));
    fireEvent.click(screen.getByText("MR"));
    expect(screen.getByDisplayValue("9")).toBeInTheDocument();
  });

  test("calculates percentage correctly", () => {
    render(<Calculator selectedTheme="Blue" darkMode={false} />);
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("0"));
    fireEvent.click(screen.getByText("%"));
    expect(screen.getByDisplayValue("0.5")).toBeInTheDocument();
  });
});
