// src/types/gtag.d.ts

// This file declares the 'gtag' function on the global Window object,
// allowing TypeScript to recognize it without errors.

interface Gtag {
    (
        command: "config",
        targetId: string,
        config?: {
            page_path?: URL | string;
            [key: string]: any;
        }
    ): void;
    (
        command: "event",
        eventName: string,
        eventParams?: {
            event_category?: string;
            event_label?: string;
            value?: number;
            [key: string]: any;
        }
    ): void;
}

declare global {
    interface Window {
        gtag: Gtag;
    }
}