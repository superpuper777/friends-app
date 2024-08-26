import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";

import FriendItem from "./FriendItem";
import { mockFriend } from "@/mock/friend";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

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
