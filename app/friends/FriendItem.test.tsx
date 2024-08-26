import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import FriendItem from "./FriendItem";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockFriend = {
  id: "1",
  img: "https://s3.amazonaws.com/uifaces/faces/twitter/csswizardry/128.jpg",
  first_name: "Jeremy",
  last_name: "Davis",
  status: "At work...",
  available: false,
};

describe("FriendItem", () => {
  test("renders friends when provided", () => {
    render(<FriendItem friend={mockFriend} />);

    expect(screen.getByText(/Jeremy Davis/i)).toBeInTheDocument();
  });
  test('navigates to the correct URL when "Details" button is clicked', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

    render(<FriendItem friend={mockFriend} />);

    fireEvent.click(screen.getByText(/Details/i));

    expect(mockPush).toHaveBeenCalledWith(`/friends/${mockFriend.id}`);
  });
});
