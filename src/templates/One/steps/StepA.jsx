import { useStore, selectFormProps } from "../../../store";
import TemplateStep from "../../TemplateStep";

const StepAChild = () => {
  const formProps = useStore(selectFormProps);
  return <div {...formProps}>step a child (with form props)</div>;
};

const StepA = () => {
  return (
    <TemplateStep name="StepA">
      <StepAChild />
    </TemplateStep>
  );
};

export default StepA;
