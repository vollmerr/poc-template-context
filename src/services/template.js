import useSWRImmutable from "swr/immutable";

export const data = {
  one: {
    id: "one",
    purchase: { zz: 567 },
    steps: { keys: ["a", "b"], defaultStep: "a" },
    page: { favicon: "a", title: "t-1" },
    form: { style: { color: "red" } },
    a: { name: "a-1", path: "a" },
    b: { name: "b-1", path: "b" },
  },
  two: {
    id: "two",
    purchase: { zz: 123 },
    steps: { keys: ["a", "c"], defaultStep: "c" },
    page: { favicon: "b", title: "t-2" },
    form: { style: { color: "blue" } },
    a: { name: "a-2", path: "a" },
    c: { name: "c-1", path: "c" },
  },
};

export const fetchTemplate = (id) => {
  const template = data[id];

  return template
    ? Promise.resolve(template)
    : Promise.reject("template not found");
};

export const useTemplate = (templateId) => {
  const res = useSWRImmutable(["template", templateId], async (_name, id) => {
    if (!id) return null;
    const data = await fetchTemplate(id);
    return data;
  });
  if (res.error) throw res.error;
  return res;
};
