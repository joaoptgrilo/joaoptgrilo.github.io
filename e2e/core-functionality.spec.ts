import { test, expect } from '@playwright/test';

test.describe('Core Functionality', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/en');
    });

    test('should switch between dark and light themes', async ({ page }) => {
        const html = page.locator('html');
        const themeSwitcher = page.getByLabel('Switch to light mode');

        await expect(html).not.toHaveClass('light');

        await themeSwitcher.click();
        await expect(html).toHaveClass(/light/);

        const switchToDark = page.getByLabel('Switch to dark mode');
        await switchToDark.click();
        await expect(html).not.toHaveClass('light');
    });

    test('should initiate CV download', async ({ page }) => {
        const downloadPromise = page.waitForEvent('download');

        const cvButton = page.getByRole('link', { name: 'Download CV' });
        await cvButton.click();

        const download = await downloadPromise;

        expect(download.suggestedFilename()).toBe('JoaoGrilo-CV.pdf');
    });

    test('should initiate CV download in Portuguese', async ({ page }) => {
        await page.goto('/pt');
        const downloadPromise = page.waitForEvent('download');

        const cvButton = page.getByRole('link', { name: 'Descarregar CV' });
        await cvButton.click();

        const download = await downloadPromise;
        expect(download.suggestedFilename()).toBe('JoaoGrilo-CV-PT.pdf');
    });
});