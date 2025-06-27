"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { FaGlobe } from "react-icons/fa";
import { clsx } from "clsx";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = (nextLocale: "en" | "pt") => {
    const currentHash = window.location.hash;
    startTransition(() => {
      const newPathname = pathname.startsWith(`/${locale}`)
        ? pathname.substring(locale.length + 1)
        : pathname;
      window.location.href = `/${nextLocale}${
        newPathname || "/"
      }${currentHash}`;
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
        disabled={isPending}>
        EN
      </button>
      <button
        onClick={() => handleSwitch("pt")}
        className={buttonClasses("pt")}
        disabled={isPending}>
        PT
      </button>
    </div>
  );
}
