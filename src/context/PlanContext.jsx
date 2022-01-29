import React, { createContext, useContext, useReducer, useMemo } from "react";

export const initialPlanState = {
  plans: [],
  selectedPlanCode: null,
};

const initialPlanContext = {
  ...initialPlanState,
  setPlans: () => {},
  setPlanSelected: () => {},
  updatePlan: () => {},
};

export const PlanContext = createContext(initialPlanContext);

// selectors
export const selectPlans = (state) => state.plans;
export const selectPlan = (code) => (state) =>
  selectPlans(state).find((plan) => plan.code === code);
export const selectPlanSelected = (state) =>
  selectPlan(state.selectedPlanCode)(state);

export const planReducer = (state, action) => {
  const { type, value } = action;

  switch (type) {
    case "setPlans":
      return { ...state, plans: value };
    case "setPlanSelected":
      return { ...state, selectedPlanCode: value };
    case "updatePlan":
      return {
        ...state,
        plans: state.plans.map((plan) =>
          plan.code === value.code ? value : plan
        ),
      };
    default:
      throw new Error("Invalid plan action received");
  }
};

export const PlanProvider = ({ children, initialState }) => {
  const initial = { ...initialPlanState, plans: initialState };
  const [state, dispatch] = useReducer(planReducer, initial);
  const value = useMemo(() => [state, dispatch], [state]);

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};

export const usePlanContext = () => {
  const [state, dispatch] = useContext(PlanContext);

  if (!state) {
    throw new Error("`usePlanContext` must be used inside a `PlanProvider`");
  }

  return {
    plans: selectPlans(state),
    planSelected: selectPlanSelected(state),
    setPlans: (value) => dispatch({ type: "setPlan", value }),
    setPlanSelected: (value) => dispatch({ type: "setPlanSelected", value }),
    updatePlan: (value) => dispatch({ type: "updatePlan", value }),
  };
};
