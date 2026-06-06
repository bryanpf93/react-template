import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { Card } from "../Card";

describe("Card", () => {
  it("should render title and description correctly", () => {
    render(<Card text="TEXT" description="DESCRIPTION" likes={0} />);

    const textElement = screen.getByRole("heading", { name: "TEXT" });
    expect(textElement).toBeInTheDocument();

    const descriptionElement = screen.getByText("DESCRIPTION");
    expect(descriptionElement).toBeInTheDocument();
  });

  it("should render N/A when description is not passed", () => {
    render(<Card text="TEXT" likes={0} />);

    const descriptionNAElement = screen.getByText("N/A");
    expect(descriptionNAElement).toBeInTheDocument();

    const descriptionElement = screen.queryByText("DESCRIPTION");
    expect(descriptionElement).not.toBeInTheDocument();
  });

  it("should render `like` text when likes is higher than zero", () => {
    render(<Card text="TEXT" likes={1} />);

    const likeElement = screen.queryByText("1 like");
    expect(likeElement).toBeInTheDocument();
  });

  it("should render `likes` text when likes is higher than one", () => {
    render(<Card text="TEXT" likes={10} />);

    const likeElement = screen.queryByText("10 likes");
    expect(likeElement).toBeInTheDocument();
  });

  it("should call onClick when button is clicked", async () => {
    const onClikMock = jest.fn();

    render(<Card text="TEXT" likes={10} onClick={onClikMock} />);

    const buttonElement = screen.getByRole("button", { name: "Action" });
    await userEvent.click(buttonElement);

    expect(onClikMock).toHaveBeenCalledTimes(1);
  });
});
