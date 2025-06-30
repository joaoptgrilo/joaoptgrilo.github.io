// src/components/LanguageSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation"; // CORRECTED: Import from 'next/navigation'
import { FaGlobe } from "react-icons/fa";
import { clsx } from "clsx";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = (nextLocale: "en" | "pt") => {
    // This function now correctly handles path-based locale switching
    // without a full page reload.

    // 1. Get the current URL hash (e.g., #about) if it exists.
    const currentHash = window.location.hash;

    // 2. Remove the current locale prefix from the pathname.
    // e.g., '/en/some-page' becomes '/some-page'
    const pathnameWithoutLocale = pathname.startsWith(`/${locale}`)
      ? pathname.substring(locale.length + 1)
      : pathname;

    // 3. Construct the new path with the new locale.
    const newPath = `/${nextLocale}${
      pathnameWithoutLocale || "/"
    }${currentHash}`;

    // 4. Use the router for client-side navigation within a transition.
    startTransition(() => {
      router.replace(newPath);
    });
  };

  const buttonClasses = (lang: "en" | "pt") =>
    clsx(
      "px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-200 uppercase disabled:opacity-50",
      {
        "bg-accent text-primary-bg": locale === lang,
        "bg-primary-bg/50 text-secondary-text hover:bg-primary-bg hover:text-accent":
          locale !== lang,
      }
    );

  return (
    <div className="flex items-center space-x-1 p-1 rounded-lg border border-neutral-700/50 bg-secondary-bg/50">
      <FaGlobe className="w-4 h-4 text-secondary-text mx-1" />
      <button
        onClick={() => handleSwitch("en")}
        className={buttonClasses("en")}
        disabled={isPending || locale === "en"}>
        EN
      </button>
      <button
        onClick={() => handleSwitch("pt")}
        className={buttonClasses("pt")}
        disabled={isPending || locale === "pt"}>
        PT
      </button>
    </div>
  );
}
