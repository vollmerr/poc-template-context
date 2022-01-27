import { atom } from "jotai";

const data = {
  one: {
    id: "one",
    purchase: { zz: 567 },
    steps: { keys: ["a", "b"] },
    a: { name: "a-1", path: "a" },
    b: { name: "b-1", path: "b" },
  },
  two: {
    id: "two",
    purchase: { zz: 123 },
    steps: { keys: ["a", "c"] },
    a: { name: "a-2", path: "a" },
    c: { name: "c-1", path: "c" },
  },
};

export const template = atom(null);
export const fetchTemplate = atom(
  (get) => get(template),
  (_get, set, id) => {
    if (data[id]) {
      const res = Promise.resolve(data[id]);
      set(template, res);
    } else {
      const rej = Promise.reject("id not found...");
    }
  }
);
export const steps = atom((get) => get(template).steps);
