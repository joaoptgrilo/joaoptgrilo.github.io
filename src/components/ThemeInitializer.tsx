// src/components/ThemeInitializer.tsx
"use client";

// This is a necessary utility to prevent a flash of the wrong theme.
// It runs a script before the page is rendered on the client.
const ThemeInitializer = () => {
  const script = `
    (function() {
      function getInitialTheme() {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
          return storedTheme;
        }
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
      }
      const theme = getInitialTheme();
      if (theme === 'light') {
        document.documentElement.classList.add('light');
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
};

export default ThemeInitializer;
