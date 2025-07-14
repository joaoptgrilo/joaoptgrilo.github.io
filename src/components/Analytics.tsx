// src/components/Analytics.tsx
"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import * as gtag from "@/lib/gtag";

const Analytics = () => {
  const pathname = usePathname();
  const [canTrack, setCanTrack] = useState(false);

  const PRODUCTION_HOSTNAME = "joaoptgrilo.github.io";

  useEffect(() => {
    console.log("--- Analytics Component Debug ---");
    const currentHostname = window.location.hostname;
    console.log("1. Current Hostname:", currentHostname);
    console.log("2. GA_ID from env:", process.env.NEXT_PUBLIC_GA_ID);

    const isProductionDomain = currentHostname === PRODUCTION_HOSTNAME;
    const isVercelDomain = currentHostname.endsWith(".vercel.app");

    console.log("3. Is Production Domain?", isProductionDomain);
    console.log("4. Is Vercel Domain?", isVercelDomain);

    if (isProductionDomain || isVercelDomain) {
      console.log("✅ RESULT: Tracking ENABLED for this domain.");
      setCanTrack(true);
    } else {
      console.log("❌ RESULT: Tracking DISABLED for this domain.");
    }
    console.log("--- End Debug ---");
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
