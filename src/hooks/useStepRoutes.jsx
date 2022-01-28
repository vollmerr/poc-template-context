import { useLocation, Navigate, useRoutes } from "react-router-dom";
import { useTemplateContext } from "../context/TemplateContext";

export const useStepRoutes = (routes) => {
  const { search } = useLocation();
  const { template } = useTemplateContext();
  const defaultRoute = `${template.steps.defaultStep}${search}`;

  return useRoutes([
    ...routes,
    { path: "*", element: <Navigate to={defaultRoute} replace /> },
  ]);
};
