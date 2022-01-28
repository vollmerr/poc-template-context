import { usePlanContext } from "../context/PlanContext";
import { useRenderCount } from "../hooks";

const Plans = ({ name }) => {
  const { plans, planSelected } = usePlanContext();
  const renderCount = useRenderCount();

  return (
    <div>
      <pre>
        {name} ({renderCount}) - plans: {JSON.stringify(plans)}
      </pre>
      <pre>
        {name} ({renderCount}) - plan selected: {JSON.stringify(planSelected)}
      </pre>
    </div>
  );
};

export default Plans;
