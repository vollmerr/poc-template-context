import React, { createContext, useContext, useReducer, useMemo } from "react";

export const initialTemplateState = {
  selectedStepKey: null,
  template: {
    id: null,
    purchase: {},
    plan: {},
    page: {},
    steps: { keys: [] },
    form: {},
  },
};

const initialTemplateContext = {
  ...initialTemplateState,
  setTemplate: () => {},
  setStepSelected: () => {},
};

export const TemplateContext = createContext(initialTemplateContext);

// selectors
export const selectTemplate = (state) => state.template;
export const selectStepProps = (state) => selectTemplate(state).steps;
export const selectStepKeys = (state) => selectStepProps(state).keys;
export const selectStepDefaultStep = (state) =>
  selectStepProps(state).defaultStep;
export const selectSteps = (state) =>
  selectStepKeys(state)
    .map((step) => selectTemplate(state)[step])
    .filter(Boolean);
export const selectStepSelected = (state) =>
  selectTemplate(state)[state.selectedStepKey];

export const templateReducer = (state, action) => {
  const { type, value } = action;

  switch (type) {
    case "setTemplate":
      return { ...state, template: value };
    case "setStepSelected":
      return { ...state, selectedStepKey: value };
    default:
      throw new Error("Invalid template action received");
  }
};

export const TemplateProvider = ({ children, initialState }) => {
  const initial = { ...initialTemplateState, template: initialState };
  const [state, dispatch] = useReducer(templateReducer, initial);
  const value = useMemo(() => [state, dispatch], [state]);

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplateContext = () => {
  const [state, dispatch] = useContext(TemplateContext);

  if (!state) {
    throw new Error(
      "`useTemplateContext` must be used inside a `TemplateProvider`"
    );
  }

  return {
    setStepSelected: (value) => dispatch({ type: "setStepSelected", value }),
    setTemplate: (value) => dispatch({ type: "setTemplate", value }),
    stepSelected: selectStepSelected(state),
    steps: selectSteps(state),
    template: selectTemplate(state),
  };
};
