// src/components/ThemeInitializer.tsx
"use client";

const ThemeInitializer = () => {
  const script = `
    (function() {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'light') {
        document.documentElement.classList.add('light');
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
};

export default ThemeInitializer;
