import { lazy } from "react";

export const lazyTemplates = {
  one: lazy(() => import("./TemplateOne/TemplateOne")),
  two: lazy(() => import("./TemplateTwo/TemplateTwo")),
};
