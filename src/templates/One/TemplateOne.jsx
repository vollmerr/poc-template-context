import { useStepRoutes } from "../../hooks";
import Template from "../Template";
import StepA from "./steps/StepA";
import StepB from "./steps/StepB";

const TemplateOne = () => {
  const routes = [
    { path: "a", element: <StepA /> },
    { path: "b", element: <StepB /> },
  ];

  const steps = useStepRoutes(routes);

  return <Template name="TemplateOne">{steps}</Template>;
};

export default TemplateOne;
