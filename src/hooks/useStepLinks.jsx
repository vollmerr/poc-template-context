import { useTemplateContext } from "../context/TemplateContext";

const isVisible = (route, activeStepKey) =>
  route.path !== activeStepKey &&
  route.enabled &&
  route.linkText &&
  !route.hideLink;

export const useStepLinks = (routes) => {
  const { stepSelected } = useTemplateContext();
  return routes.filter((route) => isVisible(route, stepSelected));
};
