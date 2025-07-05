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
  // Initialize state to null to signify we haven't determined the theme yet.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // This logic runs once on mount.
    // Default to 'dark' if nothing is stored.
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    setTheme(storedTheme || "dark");
  }, []);

  useEffect(() => {
    // This effect runs whenever the theme state changes AFTER initial determination.
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
    // We can safely assume prevTheme is not null here because of the check below.
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  // Do not render children until the theme has been determined.
  // This prevents the flicker/hydration mismatch entirely.
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