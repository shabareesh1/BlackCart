import React from "react";
import ReactDOM from "react-dom";
import CheckoutPage from "./CheckoutPage";
import "jest-styled-components";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "unstated";

import { render, Screen, cleanup } from "@testing-library/react";

describe("CheckoutPage", () => {
  afterEach(cleanup);

  test("should match snapshot", async () => {
    const { container } = render(
      <Provider>
        <Router>
          <CheckoutPage />
        </Router>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
