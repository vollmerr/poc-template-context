import {
  render as tlRender,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SWRConfig } from "swr";

import { data } from "../services/template";
import TemplatePage from "./TemplatePage";

jest.mock("../templates", () => ({
  lazyTemplates: {
    one: () => <div>in template one</div>,
    two: () => <div>in template two</div>,
  },
}));

const template = data.one;

const waitForLoaded = () =>
  waitForElementToBeRemoved(() => screen.queryByTestId("FullScreenSpinner"));

const render = ({ id = "one", path = "" } = {}) => {
  const location = `/${path}?id=${id}`;
  window.history.replaceState({}, "", location);

  return tlRender(
    <BrowserRouter>
      <Suspense fallback={"loading..."}>
        <SWRConfig value={{ provider: () => new Map() }}>
          <Routes>
            <Route path="*" element={<TemplatePage />} />
          </Routes>
        </SWRConfig>
      </Suspense>
    </BrowserRouter>
  );
};

describe("TemplatePage", () => {
  it("should redirect to home if no id provided", async () => {
    render({ id: "" });
    await waitFor(() => expect(window.location.pathname).toBe("/home"));
  });

  it("should redirect to the template", async () => {
    render();
    await waitForLoaded();
    expect(window.location.pathname).toEqual(`/${template.id}`);
  });

  it("should not redirect to the template if already on it", async () => {
    render({ path: template.id });
    await waitForLoaded();
    expect(window.location.pathname).toEqual(`/${template.id}`);
  });
});
