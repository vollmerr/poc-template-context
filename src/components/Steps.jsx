import { useSteps } from "../services/template";

const Steps = ({ name }) => {
  const steps = useSteps();
  console.log("steps: ", steps);
  const active = steps.getActive();
  const byKey = steps.getStepsByKey();
  console.log("active: ", active);
  console.log("byKey: ", byKey);

  return (
    <pre>
      {name} - steps: {JSON.stringify({ active, byKey })}
    </pre>
  );
};

export default Steps;
