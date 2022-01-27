import { usePlans } from "../services/plans";

const Plans = ({ name }) => {
  const plans = usePlans();

  return (
    <pre>
      {name} - plans: {JSON.stringify(plans)}
    </pre>
  );
};

export default Plans;
