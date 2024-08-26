import { render, screen } from "@testing-library/react";
import StatusIndicator from "./StatusIndicator";

describe("StatusIndicator component", () => {
  test("renders with green background when available is true", () => {
    render(<StatusIndicator available={true} />);

    const indicator = screen.getByTestId("status-indicator");
    expect(indicator).toHaveClass("bg-status-green");
  });

  test("renders with gray background when available is false", () => {
    render(<StatusIndicator available={false} />);

    const indicator = screen.getByTestId("status-indicator");
    expect(indicator).toHaveClass("bg-status-bg-gray");
  });
});
