import {
  useStore,
  selectSteps,
  selectStepProps,
  selectStepSelected,
} from "../store";

const Steps = ({ name }) => {
  const stepSelected = useStore(selectStepSelected);
  const stepProps = useStore(selectStepProps);
  const steps = useStore(selectSteps);

  return (
    <div>
      <pre>
        {name} - selectedStep: {JSON.stringify(stepSelected)}
      </pre>
      <pre>
        {name} - stepProps: {JSON.stringify(stepProps)}
      </pre>
      <pre>
        {name} - steps: {JSON.stringify(steps)}
      </pre>
    </div>
  );
};

export default Steps;
