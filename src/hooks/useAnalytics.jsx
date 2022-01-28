import { useEffect } from "react";

import {
  sendPageView,
  sendLoaded,
  setAppName,
  initialize,
} from "../services/analytics";
import { selectStepSelected, useStore } from "../store";

export const useAnalytics = (appName) => {
  const stepSelected = useStore(selectStepSelected);
  const page = stepSelected?.name;

  useEffect(() => {
    initialize();
    sendLoaded();
  }, []);

  useEffect(() => {
    if (appName) setAppName(appName);
  }, [appName]);

  useEffect(() => {
    if (page) sendPageView(page);
  }, [page]);
};
