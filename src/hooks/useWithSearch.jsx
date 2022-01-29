import { useLocation } from "react-router-dom";

export const useWithSearch = (stepRoutes) => {
  const { search } = useLocation();
  return (path) => `${path}${search}`;
};
