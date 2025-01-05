// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("renders menu", () => {
    render(<App />);
    expect(screen.getByTestId("header-menu").textContent).toBeInTheDocument;
  });

  it("menu contains home element", () => {
    render(<App />);
    const home = screen.getByText("Home");
    expect(home).toBeInTheDocument();
    expect(screen.getByTestId("header-menu")).toContain(home);
  });
});
