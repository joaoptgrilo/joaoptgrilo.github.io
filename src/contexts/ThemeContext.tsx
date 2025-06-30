// src/contexts/ThemeContext.tsx
"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // 1. Initialize state to null. This is the key change.
  // It signifies that we haven't determined the theme yet.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // This logic is sound and runs once on mount.
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    // Determine the initial theme.
    setTheme(storedTheme || (prefersDark ? "dark" : "light"));
  }, []);

  useEffect(() => {
    // This effect runs whenever the theme state changes AFTER the initial determination.
    // It's responsible for updating the class and localStorage.
    if (theme) {
      if (theme === "light") {
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.remove("light");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      // Ensure prevTheme is not null before toggling
      if (!prevTheme) return null;
      return prevTheme === "light" ? "dark" : "light";
    });
  }, []);

  // 2. Do not render children until the theme has been determined.
  // This prevents the flicker/hydration mismatch entirely.
  // The user sees a correctly themed (but static) page thanks to the
  // ThemeInitializer script, and then React hydrates seamlessly.
  if (!theme) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  // We can assert the theme is not null here because of the conditional render above.
  return context as ThemeContextType;
};
