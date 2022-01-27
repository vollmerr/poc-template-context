import * as React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import PageLayout from "./components/PageLayout";
import HomePage from "./pages/HomePage";
import TemplatePage from "./pages/TemplatePage";

const Router = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<>...</>}>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="templates/*" element={<TemplatePage />} />
            <Route path="*" element={<Navigate to="templates" />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default Router;
