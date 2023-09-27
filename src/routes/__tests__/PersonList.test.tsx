import { render } from "@testing-library/react";
import { PersonListView } from "../PersonList";
import { mockResponse } from "../../mocks/mockResponse";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("PersonListView", () => {
  it("should render", () => {
    render(
      <BrowserRouter>
        <PersonListView
          data={mockResponse}
          isLoading={false}
          search=""
          error={undefined}
        />
      </BrowserRouter>
    );
  });

  it("should update query params when searching", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <PersonListView
          data={mockResponse}
          isLoading={false}
          search=""
          error={undefined}
        />
      </BrowserRouter>
    );

    const search = getByTestId("search-field");

    userEvent.type(search, "John");

    expect(window.location.search).toBe("?page=1&name=John");
  });
});
