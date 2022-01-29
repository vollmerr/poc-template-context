/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from "react";

import { useTemplateContext } from "../context/TemplateContext";
import { useNavigateWithSearch } from "./useNavigateWithSearch";
import { useQueryStrings } from "./useQueryStrings";
import { useTranslation } from "./useTranslation";

export const useEditMode = (templateId) => {
  const navigate = useNavigateWithSearch();
  const { isEditing } = useQueryStrings();
  const { i18n } = useTranslation();
  const { setTemplate } = useTemplateContext();

  const handleEditMode = useCallback(
    (event) => {
      if (!event.data) return;
      const { data } = event;

      switch (data.name) {
        case "update":
          return setTemplate(data.attrs.template);
        case "change-language":
          return i18n.changeLanguage(data.attrs.languageKey);
        case "change-route":
          return navigate(`${templateId}/${data.attrs.route}`);
        default:
          console.warn("unhandled edit mode event received");
      }
    },
    [templateId]
  );

  useEffect(() => {
    if (templateId && isEditing) console.log("posting to parent");
  }, [templateId, isEditing]);

  useEffect(() => {
    if (isEditing) window.addEventListener("message", handleEditMode, false);
    return () => window.removeEventListener("message", handleEditMode, false);
  }, [isEditing, handleEditMode]);
};
