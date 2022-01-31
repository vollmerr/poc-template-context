import { useLocation } from "react-router-dom";

export const useWithSearch = () => {
  const { search } = useLocation();
  return (path) => `${path}${search}`;
};
