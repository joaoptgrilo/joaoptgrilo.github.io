// src/components/ThemeInitializer.tsx
"use client";

// This is a necessary utility to prevent a flash of the wrong theme.
// It runs a script before the page is rendered on the client.
const ThemeInitializer = () => {
  const script = `
    (function() {
      // The site defaults to dark mode.
      // We only add the 'light' class if it's explicitly set in localStorage.
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'light') {
        document.documentElement.classList.add('light');
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
};

export default ThemeInitializer;