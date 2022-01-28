import { useTemplateContext } from "../context/TemplateContext";
import { useRenderCount } from "../hooks";

const Steps = ({ name }) => {
  const { stepSelected, steps, template } = useTemplateContext();
  const renderCount = useRenderCount();

  return (
    <div>
      <pre>
        {name} ({renderCount}) - selectedStep: {JSON.stringify(stepSelected)}
      </pre>
      <pre>
        {name} ({renderCount}) - stepProps: {JSON.stringify(template.steps)}
      </pre>
      <pre>
        {name} ({renderCount}) - steps: {JSON.stringify(steps)}
      </pre>
    </div>
  );
};

export default Steps;
