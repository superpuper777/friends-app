import { render, screen, fireEvent } from "@testing-library/react";
import ImageViewer from "./ImageViewer";

jest.mock("@/components/IconButton", () => ({
  __esModule: true,
  default: ({ onClick }: { onClick: () => void }) => (
    <button onClick={onClick} aria-label="Close" />
  ),
}));

describe("ImageViewer component", () => {
  it("displays the image when imageSrc is provided", () => {
    render(
      <ImageViewer
        imageSrc="https://example.com/image.jpg"
        onClose={() => {}}
      />
    );

    expect(screen.getByAltText("Selected image")).toBeInTheDocument();
  });

  it("does not display the image when imageSrc is null", () => {
    render(<ImageViewer imageSrc={null} onClose={() => {}} />);

    expect(screen.queryByAltText("Selected image")).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const handleClose = jest.fn();
    render(
      <ImageViewer
        imageSrc="https://example.com/image.jpg"
        onClose={handleClose}
      />
    );

    fireEvent.click(screen.getByLabelText("Close"));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
