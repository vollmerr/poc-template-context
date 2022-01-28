import { useLocation, Navigate, useRoutes } from "react-router-dom";

import { useStore, selectStepDefaultStep } from "../store";

export const useStepRoutes = (routes) => {
  const { search } = useLocation();
  const defaultStep = useStore(selectStepDefaultStep);

  return useRoutes([
    ...routes,
    { path: "*", element: <Navigate to={`${defaultStep}${search}`} replace /> },
  ]);
};
