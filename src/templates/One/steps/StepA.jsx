import { usePlanContext } from "../../../context/PlanContext";
import { useTemplateContext } from "../../../context/TemplateContext";
import { useRenderCount } from "../../../hooks";
import TemplateStep from "../../TemplateStep";

const StepAChild = () => {
  const { template } = useTemplateContext();
  const { plans, setPlanSelected } = usePlanContext();
  const renderCount = useRenderCount();

  const selectPlan = (index) => () => {
    setPlanSelected(plans[index].code);
  };

  return (
    <div {...template.form}>
      StepAChild ({renderCount}) - (template.form as props)
      <div>
        <button onClick={selectPlan(0)}>select first plan</button>
        <button onClick={selectPlan(1)}>select second plan</button>
      </div>
    </div>
  );
};

const StepA = () => {
  return (
    <TemplateStep name="StepA">
      <StepAChild />
    </TemplateStep>
  );
};

export default StepA;
