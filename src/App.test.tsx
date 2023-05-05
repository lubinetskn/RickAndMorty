import { render, screen } from "./test/test-utils";
import App from "./App";
import { mockResponse } from "./mocks/mockResponse";

it("Should return posts when clicking fetch button", async () => {
  render(<App />);

  mockResponse.results.forEach((person) => {
    expect(screen.getByText("Rick", { name: person.name })).toBeDefined();
    expect(screen.getByText(person.name)).toBeDefined();
  });
});
