// src/components/LanguageSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { FaChevronDown, FaGlobe } from "react-icons/fa";
import { clsx } from "clsx";
import { useTransition, useState, useRef, useEffect } from "react";

const languageOptions = [
  { code: "en" as const, name: "English", abbr: "US" },
  { code: "pt" as const, name: "Português", abbr: "PT" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleSwitch = (nextLocale: "en" | "pt") => {
    if (nextLocale === locale || isPending) return;

    const currentHash = window.location.hash;
    const pathnameWithoutLocale = pathname.startsWith(`/${locale}`)
      ? pathname.substring(locale.length + 1)
      : pathname;
    const newPath = `/${nextLocale}${
      pathnameWithoutLocale || "/"
    }${currentHash}`;

    startTransition(() => {
      router.replace(newPath);
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const currentLanguage =
    languageOptions.find((lang) => lang.code === locale) || languageOptions[0];

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-md hover:bg-light-panel-bg/50 transition-colors font-fira_code font-semibold"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Change language">
        <FaGlobe className="w-5 h-5 text-secondary-text" />
        <span className="text-sm uppercase">{currentLanguage.abbr}</span>
        <FaChevronDown
          className={clsx(
            "w-3 h-3 text-secondary-text transition-transform duration-200",
            { "rotate-180": isOpen }
          )}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute top-full right-0 mt-2 w-48 bg-secondary-bg rounded-lg shadow-lg border border-border z-50 overflow-hidden">
          <ul className="py-1">
            {languageOptions.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => {
                    handleSwitch(lang.code);
                    setIsOpen(false);
                  }}
                  role="menuitem"
                  className={clsx(
                    "w-full text-left flex items-center px-4 py-2 text-sm transition-colors font-fira_code",
                    {
                      "bg-accent text-primary-bg no-text-stroke cursor-default":
                        locale === lang.code,
                      "text-primary-text hover:bg-light-panel-bg":
                        locale !== lang.code,
                    }
                  )}
                  disabled={isPending || locale === lang.code}>
                  <span
                    className={clsx("w-10 font-semibold", {
                      "text-primary-bg": locale === lang.code,
                      "text-secondary-text": locale !== lang.code,
                    })}>
                    {lang.abbr}
                  </span>
                  <span>{lang.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
