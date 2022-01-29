import { useSearchParams } from "react-router-dom";

export const useQueryStrings = () => {
  const [params] = useSearchParams();

  return {
    isEditing: params.get("edt"),
  };
};
