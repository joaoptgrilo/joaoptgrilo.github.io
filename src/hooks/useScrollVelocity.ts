// src/hooks/useScrollVelocity.ts
"use client";

import { useEffect } from 'react';

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
                const velocity = (scrollDiff / timeDiff) * 1000;

                const minDuration = 150;
                const maxDuration = 500;
                const velocityThreshold = 3000;

                let duration = maxDuration - (velocity / velocityThreshold) * (maxDuration - minDuration);

                duration = Math.max(minDuration, Math.min(maxDuration, duration));

                document.documentElement.style.setProperty('--animation-duration', `${Math.round(duration)}ms`);
            }

            lastScrollY = currentScrollY;
            lastTimestamp = currentTimestamp;
        };

        const throttledScrollHandler = throttle(handleScroll, 100);

        document.documentElement.style.setProperty('--animation-duration', '500ms');

        window.addEventListener('scroll', throttledScrollHandler, { passive: true });

        return () => {
            window.removeEventListener('scroll', throttledScrollHandler);
        };
    }, []);
};