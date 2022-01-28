import { useLocation, useNavigate } from "react-router-dom";

export const useNavigateWithSearch = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  return (pathname) => navigate({ pathname, search });
};
