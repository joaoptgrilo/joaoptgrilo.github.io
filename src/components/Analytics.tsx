// src/components/Analytics.tsx
"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import * as gtag from "@/lib/gtag";

const Analytics = () => {
  const pathname = usePathname();
  const [canTrack, setCanTrack] = useState(false);

  const ALLOWED_HOSTNAMES = [
    "joaoptgrilo.github.io",
    "joaoptgrilo-github-io.vercel.app",
  ];

  useEffect(() => {
    const currentHostname = window.location.hostname;
    if (ALLOWED_HOSTNAMES.some((host) => currentHostname.includes(host))) {
      setCanTrack(true);
    }
  }, []);

  useEffect(() => {
    if (canTrack) {
      gtag.pageview(new URL(pathname, window.location.origin));
    }
  }, [pathname, canTrack]);

  if (!canTrack || !process.env.NEXT_PUBLIC_GA_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default Analytics;
