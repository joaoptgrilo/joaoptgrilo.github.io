// src/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { clsx } from "clsx";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      className={clsx(
        "relative flex items-center h-8 w-14 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-opacity-50",
        {
          "bg-gray-200": theme === "light",
          "bg-secondary-bg": theme === "dark",
        }
      )}
    >
      {/* Icons positioned inside the track */}
      <FaSun
        className={clsx(
          "absolute left-2 h-4 w-4 transition-colors duration-300",
          {
            "text-yellow-500": theme === "light",
            "text-secondary-text": theme === "dark",
          }
        )}
      />
      <FaMoon
        className={clsx(
          "absolute right-2 h-4 w-4 transition-colors duration-300",
          {
            "text-secondary-text": theme === "light",
            "text-yellow-400": theme === "dark",
          }
        )}
      />

      {/* Sliding Thumb */}
      <div
        className={clsx(
          "absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full shadow-md transition-transform duration-300 ease-in-out",
          {
            "translate-x-0 bg-primary-text": theme === "light",
            "translate-x-6 bg-gray-200": theme === "dark",
          }
        )}
      />
    </button>
  );
};

export default ThemeSwitcher;
