// src/hooks/useScrollVelocity.ts
"use client";

import { useEffect } from 'react';

// A lightweight throttle function to avoid performance issues.
const throttle = (func: (...args: any[]) => void, limit: number) => {
    let inThrottle: boolean;
    return function (this: any, ...args: any[]): void {
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

export const useScrollVelocity = () => {
    useEffect(() => {
        let lastScrollY = typeof window !== 'undefined' ? window.pageYOffset : 0;
        let lastTimestamp = performance.now();

        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            const currentTimestamp = performance.now();

            const timeDiff = currentTimestamp - lastTimestamp;
            const scrollDiff = Math.abs(currentScrollY - lastScrollY);

            if (timeDiff > 0) {
                const velocity = (scrollDiff / timeDiff) * 1000; // pixels per second

                const minDuration = 150; // ms
                const maxDuration = 500; // ms
                const velocityThreshold = 3000; // px/s

                // Calculate duration: faster scroll = shorter duration
                let duration = maxDuration - (velocity / velocityThreshold) * (maxDuration - minDuration);

                // Clamp the duration between min and max values
                duration = Math.max(minDuration, Math.min(maxDuration, duration));

                document.documentElement.style.setProperty('--animation-duration', `${Math.round(duration)}ms`);
            }

            lastScrollY = currentScrollY;
            lastTimestamp = currentTimestamp;
        };

        // Throttle the scroll handler to run at most every 100ms
        const throttledScrollHandler = throttle(handleScroll, 100);

        // Set a default value on initial mount
        document.documentElement.style.setProperty('--animation-duration', '500ms');

        window.addEventListener('scroll', throttledScrollHandler, { passive: true });

        return () => {
            window.removeEventListener('scroll', throttledScrollHandler);
        };
    }, []);
};