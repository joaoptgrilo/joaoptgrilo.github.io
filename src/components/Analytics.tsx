// src/components/Analytics.tsx
"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import * as gtag from "@/lib/gtag";

const Analytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    // This handles page views on client-side navigation
    gtag.pageview(new URL(pathname, window.location.origin));
  }, [pathname]);

  // Only render the script if we are in production and the GA_ID is set
  if (process.env.NODE_ENV !== "production" || !process.env.NEXT_PUBLIC_GA_ID) {
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
