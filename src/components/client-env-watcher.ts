"use client";

import { useEffect } from "react";

export function ClientEnvWatcher() {
  useEffect(() => {
    // wrap all tables in a div to make them scrollable on mobile
    const tables = document.querySelectorAll("table");
    tables.forEach((table) => {
      const wrapper = document.createElement("div");
      wrapper.className = "table-wrapper";
      table.parentNode?.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });
  }, []);
  return null;
}
