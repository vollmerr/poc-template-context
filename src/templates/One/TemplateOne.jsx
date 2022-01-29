import { useStepRoutes, useStepLinks } from "../../hooks";
import Template from "../Template";
import StepA from "./steps/StepA";
import StepB from "./steps/StepB";
import StepLinks from "./StepLinks";

const ThisSHouldntRender = () => <div>this shouldnt be rendering...</div>;

const TemplateOne = () => {
  const routes = [
    {
      path: "a",
      element: <StepA />,
      enabled: true,
      hideLink: false,
      linkText: "To Step A",
    },
    {
      path: "b",
      element: <StepB />,
      enabled: true,
      hideLink: false,
      linkText: "To Step B",
    },
    {
      path: "c",
      element: <ThisSHouldntRender />,
      enabled: true,
      hideLink: false,
      linkText: "should redirect to A",
      redirects: [{ to: "a", when: true }],
    },
    {
      path: "d",
      element: <ThisSHouldntRender />,
      enabled: true,
      hideLink: true,
      linkText: "should not render a link",
    },
    {
      path: "e",
      element: <ThisSHouldntRender />,
      enabled: false,
      disabledMessage: "message that its disabled",
      hideLink: false,
      linkText: "should hide link + display message for disabled",
    },
  ];

  const steps = useStepRoutes(routes);
  const links = useStepLinks(routes);

  return (
    <Template name="TemplateOne">
      {steps}
      <StepLinks links={links} />
    </Template>
  );
};

export default TemplateOne;
