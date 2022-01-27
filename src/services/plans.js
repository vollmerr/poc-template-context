import { createContext, useMemo, useContext, useReducer } from "react";

const data = [
  { id: "plan-1", a: 1 },
  { id: "plan-2", b: 2 },
];

export const fetchPlans = () => Promise.resolve(data);

const PlanContext = createContext(null);

const planReducer = (state, action) => {
  const { type } = action;
  if (type === "set") return action.payload;
  return state;
};

export const PlanProvider = ({ children, initialState = {} }) => {
  const [state, dispatch] = useReducer(planReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};

export const usePlans = () => {
  const [plans, dispatch] = useContext(PlanContext);
  const set = (payload) => dispatch({ type: "set", payload });
  return { plans, set };
};
