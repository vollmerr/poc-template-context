import ga from "react-ga";

const libraryUrl = "https://www.google-analytics.com/analytics_debug.js";

const debug = 1;
const log = debug ? console.log : () => {};

export const initialize = () => {
  log("[analytics] initialize");
  ga.initialize("UA-217141661-3");
};

export const setAppName = (appName) => {
  log("[analytics] setting app name: ", { appName });
};

export const sendLoaded = () => {
  log("[analytics] sending loaded");
  ga.timing({ category: 'test-cat', value: 123, variable: 'test-var' })
};

export const sendPageView = (page) => {
  log("[analytics] sending pageview: ", { page });
  ga.pageview(page);
};

export const sendEvent = (...event) => {
  log("[analytics] sending event: ", ...event);
};
