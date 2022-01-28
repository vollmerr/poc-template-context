import create from "zustand";

import { createPlansSlice } from "./plans";
import { createTemplateSlice } from "./template";

export const useStore = create((set, get) => ({
  ...createPlansSlice(set, get),
  ...createTemplateSlice(set, get),
}));
