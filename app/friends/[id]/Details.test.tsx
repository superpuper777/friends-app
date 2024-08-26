import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import Details from "./Details";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const friend = {
  id: 6,
  img: "https://s3.amazonaws.com/uifaces/faces/twitter/walterstephanie/128.jpg",
  first_name: "Steph",
  last_name: "Walters",
  phone: "(820) 289-1818",
  address_1: "5190 Center Court Drive",
  city: "Spring",
  state: "TX",
  zipcode: "77370",
  bio: "I'm very choosy. I'm also very suspicious, very irrational and I have a very short temper. I'm also extremely jealous and slow to forgive. Just so you know.",
  photos: [
    "https://flic.kr/p/mxHVJu",
    "https://flic.kr/p/nCJyXN",
    "https://flic.kr/p/mxwwsv",
  ],
  statuses: [
    "Developing something amazing",
    "This could be interesting....",
    "Man, life is so good",
    "There is nothing quite like a good friend",
    "Take a look around you, everything is awesome",
    "What is the point of all of this",
  ],
  available: true,
};

describe("Details component", () => {
  it("renders the friend details correctly", () => {
    render(<Details friend={friend} />);

    expect(screen.getByText("Steph Walters")).toBeInTheDocument();

    expect(
      screen.getByText("Developing something amazing")
    ).toBeInTheDocument();

    expect(screen.getByAltText("Profile Picture")).toBeInTheDocument();
  });

  it("navigates back when the back button is clicked", () => {
    const mockBack = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ back: mockBack });

    render(<Details friend={friend} />);

    fireEvent.click(screen.getByRole("button", { name: /Go back/i }));

    expect(mockBack).toHaveBeenCalled();
  });
});
