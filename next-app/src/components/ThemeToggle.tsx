"use client";

import { useTheme } from "@/utils/theme-provider";

export const ThemeToggle = () => {
  const { toggleTheme } = useTheme();
  return (
    <div className="d-inline-flex align-items-center*">
      <input type="checkbox" className="btn-check" id="btn-check-light-dark" 
      onChange={toggleTheme}
      />
      <label className="btn border border-dark" htmlFor="btn-check-light-dark">
        <i className="bi bi-sun-fill text-secondary"></i> / &nbsp;
        <i className="bi bi-moon-fill text-secondary"></i>
      </label>
    </div>
  );
};
