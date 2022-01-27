import { useEffect, useState } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { useAtom } from "jotai";

import Params from "../components/Params";
import lazyTemplates from "../templates/lazyTemplates";
import { fetchPlans, PlanProvider } from "../services/plans";
import { fetchTemplate, TemplateProvider } from "../services/template";
import { templateAtom } from "../state/template";

const TemplatePage = () => {
  // const [template, updateTemplate] = useAtom(templateAtom);
  // const [template, setTemplate] = useState(null);
  const [plans, setPlans] = useState(null);
  const [params] = useSearchParams();
  const id = params.get("id");
  const [template] = fetchTemplate(id);
  console.log("template ", template);
  useEffect(() => {
    Promise.all([fetchPlans(), fetchTemplate(id)]).then(([p, t]) => {
      // setPlans(p);
      // updateTemplate(t);
    });
  }, [id]);

  if (!template || !plans) return "loading template....";

  return (
    <PlanProvider initialState={plans}>
      <TemplateProvider initialState={template}>
        template: {JSON.stringify(template)}
        <Params name="TemplatePage" />
        <Routes>
          {Object.entries(lazyTemplates).map(([path, Element]) => (
            <Route key={path} path={`${path}/*`} element={<Element />} />
          ))}
        </Routes>
      </TemplateProvider>
    </PlanProvider>
  );
};

export default TemplatePage;
