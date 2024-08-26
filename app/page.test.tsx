import { render, waitFor } from "@testing-library/react";
import HomePage from "@/app/page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

describe("HomePage", () => {
  it("should redirect to /friends-page", async () => {
    const { redirect } = require("next/navigation");
    render(<HomePage />);

    await waitFor(() => {
      expect(redirect).toHaveBeenCalledWith("/friends");
    });
  });
});
