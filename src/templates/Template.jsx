import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Params from "../components/Params";
import Plans from "../components/Plans";
import Purchase from "../components/Purchase";
import Steps from "../components/Steps";
import RenderCount from "../components/RenderCount";
import { setStepSelectedAction, useStore } from "../store";

const Template = ({ name, children }) => {
  const stepKey = useParams()["*"];
  const setStepSelected = useStore(setStepSelectedAction);

  useEffect(() => {
    setStepSelected(stepKey);
  }, [stepKey]);

  return (
    <div>
      <Params name={name} />
      <Purchase name={name} />
      <Plans name={name} />
      <Steps name={name} />
      <RenderCount name={name} />

      {children}
    </div>
  );
};

export default Template;
