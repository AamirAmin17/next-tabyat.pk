import { screen, render } from "@testing-library/react";
import Navbar from "../../components/Navbar";

describe("Testing the navbar component", () => {
  beforeEach(() => {
    render(<Navbar />);
  });
  test("testing the total buttons in navbar component as for now it is 5 buttons", async () => {
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(5);
  });

  it("renders homepage unchanged", () => {
    const container = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
