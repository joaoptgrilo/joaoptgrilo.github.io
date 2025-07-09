// src/components/LanguageSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { FaGlobe } from "react-icons/fa";
import { clsx } from "clsx";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = (nextLocale: "en" | "pt") => {
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

  const buttonClasses = (lang: "en" | "pt") =>
    clsx(
      "px-3 py-1.5 text-xs rounded-md transition-colors duration-200 uppercase",
      {
        "bg-accent text-primary-bg font-bold": locale === lang,
        "bg-primary-bg/50 text-secondary-text hover:bg-primary-bg hover:text-accent font-semibold":
          locale !== lang,
      }
    );

  return (
    <div className="flex items-center space-x-1 p-1 rounded-lg bg-secondary-bg/50">
      <FaGlobe className="w-4 h-4 text-secondary-text mx-1" />
      <button
        onClick={() => handleSwitch("en")}
        className={buttonClasses("en")}
        disabled={isPending || locale === "en"}
      >
        EN
      </button>
      <button
        onClick={() => handleSwitch("pt")}
        className={buttonClasses("pt")}
        disabled={isPending || locale === "pt"}
      >
        PT
      </button>
    </div>
  );
}
