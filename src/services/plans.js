import useSWRImmutable from "swr/immutable";

const data = [
  { code: "plan-1", a: 1 },
  { code: "plan-2", b: 2 },
];

export const fetchPlans = () => Promise.resolve(data);

export const usePlans = () => {
  const res = useSWRImmutable(["plans"], async () => {
    const data = await fetchPlans();
    return data;
  });
  if (res.error) throw res.error;
  return res;
};
