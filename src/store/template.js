export const initialTemplateState = {
  id: null,
  purchase: {},
  plan: {},
  page: {},
  steps: { keys: [] },
  form: {},
};

export const createTemplateSlice = (set, get) => ({
  stepSelected: null,
  template: initialTemplateState,
  setTemplate: (template) => set({ template }),
  setStepSelected: (stepSelected) => set({ stepSelected }),
});

// selectors
export const selectTemplate = (state) => state.template;
export const selectTemplateId = (state) => selectTemplate(state).id;
export const selectPlanProps = (state) => selectTemplate(state).plan;
export const selectPurchaseProps = (state) => selectTemplate(state).purchase;
export const selectStepProps = (state) => selectTemplate(state).steps;
export const selectStepKeys = (state) => selectStepProps(state).keys;
export const selectStepDefaultStep = (state) =>
  selectStepProps(state).defaultStep;
export const selectSteps = (state) =>
  selectStepKeys(state)
    .map((step) => selectTemplate(state)[step])
    .filter(Boolean);
export const selectStepSelected = (state) =>
  selectTemplate(state)[state.stepSelected];
export const selectFormProps = (state) => selectTemplate(state).form;

// actions
export const setTemplateAction = (state) => state.setTemplate;
export const setStepSelectedAction = (state) => state.setStepSelected;
