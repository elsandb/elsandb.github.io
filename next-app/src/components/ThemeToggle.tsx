"use client";

import { useTheme } from "@/utils/theme-provider";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="d-inline-flex align-items-center gap-2">
      <i className="bi bi-sun-fill text-secondary"></i>
      <div className="form-check form-switch m-0">
        <input
          className="form-check-input text-secondary*"
          type="checkbox"
          role="switch"
          id="themeSwitch"
          checked={isDark}
          onChange={toggleTheme}
          aria-label="Switch between light and dark theme."
        />
      </div>
      <i className="bi bi-moon-fill text-secondary"></i>
    </div>
  );
};

// export const ThemeToggle = () => {
//   const { theme, toggleTheme } = useTheme();

//   const isDark = theme === "dark";

//   return (
//     <div className="form-check form-switch d-flex align-items-center gap-3">
//       <i className="bi bi-sun-fill text-warning"></i>
//       <input
//         className="form-check-input"
//         type="checkbox"
//         role="switch"
//         id="themeSwitch"
//         checked={isDark}
//         onChange={toggleTheme}
//         aria-label="Switch between light and dark theme."
//       />
//       <i className="bi bi-moon-fill text-primary"></i>
//     </div>
//   );
// };