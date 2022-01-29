import { Navigate, useRoutes } from "react-router-dom";
import { useWithSearch } from ".";

import { useTemplateContext } from "../context/TemplateContext";
import { useQueryStrings } from "./useQueryStrings";

const DisabledMessage = ({ message }) => {
  return <div>disabled message: {message}</div>;
};

export const useStepRoutes = (stepRoutes) => {
  const withSearch = useWithSearch();
  const { isEditing } = useQueryStrings();
  const { template } = useTemplateContext();
  const defaultRoute = withSearch(template.steps.defaultStep);

  const getRedirectPath = (route) => {
    const redirect = route.redirects?.filter((x) => x.when);
    return redirect && redirect[0]?.to;
  };

  const getElement = (route) => {
    if (!route.enabled) {
      return <DisabledMessage message={route.disabledMessage} />;
    }

    const redirect = getRedirectPath(route);
    if (redirect && !isEditing) {
      return <Navigate to={withSearch(redirect)} replace />;
    }

    return route.element;
  };

  const routes = stepRoutes.map((route) => ({
    path: route.path,
    element: getElement(route),
  }));

  return useRoutes([
    ...routes,
    { path: "*", element: <Navigate to={defaultRoute} replace /> },
  ]);
};
