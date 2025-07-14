// src/lib/gtag.ts

// Ensure the GA ID is available, otherwise log an error
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
if (!GA_ID) {
    console.warn(
        "Google Analytics ID (NEXT_PUBLIC_GA_ID) is not defined. Tracking will be disabled."
    );
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
    if (!GA_ID || typeof window.gtag !== 'function') return; // Added safety check
    window.gtag("config", GA_ID, {
        page_path: url,
    });
};

type GTagEvent = {
    action: string;
    category: string;
    label: string;
    value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent): void => {
    if (!GA_ID || typeof window.gtag !== 'function') return; // Added safety check
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};