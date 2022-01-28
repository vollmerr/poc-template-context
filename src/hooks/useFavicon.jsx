import { useEffect } from "react";

export const useFavicon = (favicon) => {
  useEffect(() => {
    if (!favicon) return;
    const faviconEl = document.querySelector('link[rel="icon"]');
    if (!faviconEl) return;
    faviconEl.href = favicon;
  }, [favicon]);
};
