/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useTemplate } from "../services/template";
import { setTemplateAction, useStore } from "../store";

export const useTemplatesLoader = (id) => {
  const { data: template } = useTemplate(id);
  const setTemplate = useStore(setTemplateAction);

  useEffect(() => {
    if (template) setTemplate(template);
  }, [template]);

  return template;
};
