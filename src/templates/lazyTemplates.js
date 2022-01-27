import { lazy } from "react";

const lazyTemplates = {
  one: lazy(() => import("./One/TemplateOne")),
  two: lazy(() => import("./Two/TemplateTwo")),
};

export default lazyTemplates;
