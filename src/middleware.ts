// src/middleware.ts
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "pt"],
  defaultLocale: "en",
});

export const config = {
  // CORRECTED: The matcher now includes a rule to skip all paths with a file extension.
  // The '.*\..*' part tells it to ignore any path that contains a dot.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\..*).*)"],
};