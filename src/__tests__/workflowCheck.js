import { render, screen } from "@testing-library/react";
import Heading from "../components/Heading.js";

test("Does Workflow 2 exist", function () {
  render(<Heading />);
  const headerElement = screen.getByText(/Workflow 2/i);
  expect(headerElement).toBeInTheDocument();
});
