import { useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import Params from "../../components/Params";
import Plans from "../../components/Plans";
import Purchase from "../../components/Purchase";
import Steps from "../../components/Steps";
import { useSteps } from "../../services/template";

import StepA from "./steps/StepA";
import StepB from "./steps/StepB";

const TemplateOne = () => {
  const stepKey = useParams()["*"];
  const steps = useSteps();

  useEffect(() => {
    console.log("setting active: ", stepKey);
    steps.setActive(stepKey);
  }, [stepKey]);

  return (
    <div>
      <Params name="TemplateOne" />
      <Purchase name="TemplateOne" />
      <Plans name="TemplateOne" />
      <Steps name="TemplateOne" />

      <Routes>
        <Route path={"a"} element={<StepA />} />
        <Route path={"b"} element={<StepB />} />
      </Routes>
    </div>
  );
};

export default TemplateOne;
