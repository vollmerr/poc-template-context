import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Params from "../components/Params";
import Plans from "../components/Plans";
import Purchase from "../components/Purchase";
import Steps from "../components/Steps";
import { useAnalytics, useEditMode, useFavicon, useTitle } from "../hooks";
import { useTemplateContext } from "../context/TemplateContext";

const Template = ({ name, children }) => {
  const { template, setStepSelected } = useTemplateContext();
  const stepKey = useParams()["*"];

  useAnalytics(template.id);
  useEditMode(template.id);
  useFavicon(template.page.favicon);
  useTitle(template.page.title);

  useEffect(() => {
    setStepSelected(stepKey);
  }, [stepKey]);

  return (
    <div>
      <Params name={name} />
      <Purchase name={name} />
      <Plans name={name} />
      <Steps name={name} />

      {children}
    </div>
  );
};

export default Template;
