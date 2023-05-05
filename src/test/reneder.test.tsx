import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { SearchPerson } from "components/search-person";

test("loads and displays", async () => {
  render(<SearchPerson />);

  await userEvent.click(screen.getByText("Rick"));
  await screen.findByRole("heading");

  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toBeDisabled();
});
