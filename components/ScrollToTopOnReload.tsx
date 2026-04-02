"use client";

import { useEffect } from "react";

export default function ScrollToTopOnReload() {
  useEffect(() => {
    const navEntry = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;

    if (navEntry?.type === "reload") {
      window.history.scrollRestoration = "manual";
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
    }
  }, []);

  return null;
}
