const debug = 1;
const log = debug ? console.log : () => {};

export const initialize = () => {
  log("[analytics] initialize");
};

export const setAppName = (appName) => {
  log("[analytics] setting app name: ", { appName });
};

export const sendLoaded = () => {
  log("[analytics] sending loaded");
};

export const sendPageView = (page) => {
  log("[analytics] sending pageview: ", { page });
};

export const sendEvent = (...event) => {
  log("[analytics] sending event: ", ...event);
};
