import { useEffect } from "react";
import { useTemplateContext } from "../context/TemplateContext";

import {
  sendPageView,
  sendLoaded,
  setAppName,
  initialize,
} from "../services/analytics";

export const useAnalytics = (appName) => {
  const { stepSelected } = useTemplateContext();
  const page = stepSelected?.name;
  console.log("stepSelected: ", stepSelected);
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
