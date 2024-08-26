import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";

import Details from "./Details";
import { friend } from "@/mock/friend";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Details component", () => {
  test("renders the friend details correctly", () => {
    render(<Details friend={friend} />);

    expect(screen.getByText("Steph Walters")).toBeInTheDocument();

    expect(
      screen.getByText("Developing something amazing")
    ).toBeInTheDocument();

    expect(screen.getByAltText("Profile Picture")).toBeInTheDocument();
  });

  test("navigates back when the back button is clicked", () => {
    const mockBack = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ back: mockBack });

    render(<Details friend={friend} />);

    fireEvent.click(screen.getByRole("button", { name: /Go back/i }));

    expect(mockBack).toHaveBeenCalled();
  });

  test("displays Info tab content by default", () => {
    render(<Details friend={friend} />);

    expect(screen.getByText(/Bio:/i)).toBeInTheDocument();
    expect(screen.getByText(friend.bio)).toBeInTheDocument();
  });

  test("displays Photos tab content when Photos tab is clicked", () => {
    render(<Details friend={friend} />);

    fireEvent.click(screen.getByText("Photos"));

    expect(
      screen.getByRole("img", { name: /Friend photo 1/i })
    ).toBeInTheDocument();
  });
});
