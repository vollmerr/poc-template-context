import { selectPlans, useStore } from "../store";

const Plans = ({ name }) => {
  const plans = useStore(selectPlans);

  return (
    <pre>
      {name} - plans: {JSON.stringify(plans)}
    </pre>
  );
};

export default Plans;
