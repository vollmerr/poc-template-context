import {
  createContext,
  useMemo,
  useContext,
  useState,
  useReducer,
} from "react";

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

export const fetchTemplate = (id) => Promise.resolve(data[id]);

const TemplateContext = createContext(null);

const templateReducer = (state, action) => {
  const { type } = action;
  if (type === "set") return action.payload;
  return state;
};

export const TemplateProvider = ({ children, initialState = {} }) => {
  const [state, dispatch] = useReducer(templateReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplate = () => {
  const [template, dispatch] = useContext(TemplateContext);
  
  // const getId = () => template.id;
  // const getPurchaseProps = () => template.purchase;
  // const getSteps = () => template.steps;
  
  const set = (payload) => dispatch({ type: "set", payload });

  return { template, set };
};

export const usePurchase = () => {
  const [{ purchase: props }] = useContext(TemplateContext);
  return { props };
};

export const useSteps = () => {
  const [template] = useContext(TemplateContext);
  const [active, setActive] = useState(null); // not shared!!!!
  console.log("useSteps: ", active);
  const getStepsByKey = () =>
    template.steps.keys.reduce((obj, key) => {
      const step = template[key];
      if (step) obj[key] = step;
      return obj;
    }, {});

  const getActive = () => getStepsByKey()[active];

  return { getStepsByKey, getActive, setActive };
};
