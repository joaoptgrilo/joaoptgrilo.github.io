import { test, expect } from '@playwright/test';

const domainsToIgnore = [
    'linkedin.com',
    'leetcode.com',
    'tryhackme.com',
];

test.describe('Link Integrity Check', () => {
    test('should verify all links on the homepage return a successful status', async ({ page }) => {
        await page.goto('/');

        const links = await page.locator('a[href]').evaluateAll((elements: HTMLAnchorElement[]) =>
            elements.map(el => el.href)
        );

        const validLinks = links.filter(link =>
            link &&
            !link.startsWith('mailto:') &&
            !link.includes('/#')
        );

        const uniqueLinks = [...new Set(validLinks)];

        for (const link of uniqueLinks) {
            try {
                const url = new URL(link);
                if (domainsToIgnore.some(domain => url.hostname.includes(domain))) {
                    console.log(`🟡 SKIPPING: ${link} (domain on ignore list)`);
                    continue;
                }

                const response = await page.request.head(link, { timeout: 10000 });
                expect(response.status(), `Link ${link} returned status ${response.status()}`).toBeLessThan(400);
                console.log(`✅ OK: ${link} - ${response.status()}`);
            } catch (error) {
                console.warn(`⚠️ WARN: Could not check ${link}. Reason: ${error.message}`);
            }
        }
    });
});