import { lazy } from "react";

export const lazyTemplates = {
  one: lazy(() => import("./One/TemplateOne")),
  two: lazy(() => import("./Two/TemplateTwo")),
};
