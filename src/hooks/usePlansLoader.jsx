/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { usePlans } from "../services/plans";
import { setPlansAction, useStore } from "../store";

export const usePlansLoader = () => {
  const { data: plans } = usePlans();
  const setPlans = useStore(setPlansAction);

  useEffect(() => {
    if (plans) setPlans(plans);
  }, [plans]);

  return plans;
};
