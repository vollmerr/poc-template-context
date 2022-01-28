import * as React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import PageLayout from "./components/PageLayout";
import ErrorBoundary from "./components/ErrorBoundary";
import HomePage from "./pages/HomePage";
import TemplatePage from "./pages/TemplatePage";

const Router = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<>...</>}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<HomePage />} />
              <Route path="templates/*" element={<TemplatePage />} />
              <Route path="*" element={<Navigate to="templates" />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default Router;
