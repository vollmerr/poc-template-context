/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";

import Params from "../components/Params";
import { lazyTemplates } from "../templates";
import { useTemplate } from "../services/template";
import { usePlans } from "../services/plans";
import { useNavigateWithSearch } from "../hooks";
import { TemplateProvider } from "../context/TemplateContext";
import { PlanProvider } from "../context/PlanContext";

const TemplatePage = () => {
  const navigate = useNavigateWithSearch();
  const [params] = useSearchParams();
  const id = params.get("id");
  const { data: template } = useTemplate(id);
  const { data: plans } = usePlans();

  useEffect(() => {
    if (!id) navigate("/home");
  }, [id]);

  useEffect(() => {
    if (!template?.id) return;
    if (window.location.pathname.match(template.id)) return;
    navigate(template.id);
  }, [template?.id]);

  if (!template || !plans) {
    return <div data-testid="FullScreenSpinner">loading....</div>;
  }

  return (
    <TemplateProvider initialState={template}>
      <PlanProvider initialState={plans}>
        <Params name="TemplatePage" />
        <Routes>
          {Object.entries(lazyTemplates).map(([path, Element]) => (
            <Route key={path} path={`${path}/*`} element={<Element />} />
          ))}
        </Routes>
      </PlanProvider>
    </TemplateProvider>
  );
};

export default TemplatePage;
