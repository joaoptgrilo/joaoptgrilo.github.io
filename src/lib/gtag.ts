// src/lib/gtag.ts
interface WindowWithGtag extends Window {
    gtag?: (
        command: 'config' | 'event',
        targetIdOrEventName: string,
        params?: { [key: string]: any }
    ) => void;
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const canTrack = (): boolean => {
    return !!GA_ID && typeof window !== "undefined";
};

export const pageview = (url: URL): void => {
    if (!canTrack()) return;

    const localWindow = window as WindowWithGtag;

    if (typeof localWindow.gtag === 'function') {
        localWindow.gtag('config', GA_ID!, {
            page_path: url,
        });
    }
};

type GTagEvent = {
    action: string;
    category: string;
    label: string;
    value: number;
};

export const event = ({ action, category, label, value }: GTagEvent): void => {
    if (!canTrack()) return;

    const localWindow = window as WindowWithGtag;

    if (typeof localWindow.gtag === 'function') {
        localWindow.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};