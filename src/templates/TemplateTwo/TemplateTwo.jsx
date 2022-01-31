import { useStepRoutes } from "../../hooks";
import Template from "../Template";
import StepA from "./steps/StepA";
import StepC from "./steps/StepC";

const TemplateTwo = () => {
  const routes = [
    { path: "a", element: <StepA /> },
    { path: "c", element: <StepC /> },
  ];

  const steps = useStepRoutes(routes);

  return <Template name="TemplateTwo">{steps}</Template>;
};

export default TemplateTwo;
