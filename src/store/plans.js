export const createPlansSlice = (set, get) => ({
  plans: [],
  planSelected: null,
  setPlans: (plans) => set({ plans }),
  selectPlan: (code) => set({ planSelected: code }),
});

// selectors
export const selectPlans = (state) => state.plans;
export const selectPlanSelected = (state) => state.selected;

// actions
export const setPlansAction = (state) => state.setPlans;
