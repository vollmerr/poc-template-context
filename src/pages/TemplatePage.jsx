/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";

import Params from "../components/Params";
import RenderCount from "../components/RenderCount";
import { lazyTemplates } from "../templates";
import {
  useAnalytics,
  useEditMode,
  useFavicon,
  useNavigateWithSearch,
  usePlansLoader,
  useTemplatesLoader,
  useTitle,
} from "../hooks";

const TemplatePage = () => {
  const navigate = useNavigateWithSearch();
  const [params] = useSearchParams();
  const id = params.get("id");
  const template = useTemplatesLoader(id);
  const plans = usePlansLoader();

  useAnalytics(template?.id);
  useEditMode(template?.id);
  useFavicon(template?.page.favicon);
  useTitle(template?.page.title);

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
    <div>
      <Params name="TemplatePage" />
      <RenderCount name="TemplatePage" />
      <Routes>
        {Object.entries(lazyTemplates).map(([path, Element]) => (
          <Route key={path} path={`${path}/*`} element={<Element />} />
        ))}
      </Routes>
    </div>
  );
};

export default TemplatePage;
