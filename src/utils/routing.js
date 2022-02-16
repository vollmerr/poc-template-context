import { matchPath, generatePath } from "react-router-dom";

const templatePath = "templates";
const templateByIdPath = `${templatePath}/:templateId`;
const templateWithStepPath = `${templateByIdPath}/:stepKey`;

export const matchTemplatePath = (location = window.location.pathname) =>
  matchPath(templateWithStepPath, location);

export const generateTemplatePath = (templateId, stepKey) => {
  if (!templateId) return templatePath;
  if (!stepKey) return generatePath(templateByIdPath, { templateId });
  return generatePath(templateWithStepPath, { templateId, stepKey });
};
