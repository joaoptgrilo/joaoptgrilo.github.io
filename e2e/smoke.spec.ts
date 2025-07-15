import { test, expect } from '@playwright/test';

test.describe('Smoke Test', () => {
    test('should load the homepage and display the main heading', async ({ page }) => {
        await page.goto('/');

        const mainHeading = page.getByRole('heading', { name: 'João Grilo' });
        await expect(mainHeading).toBeVisible();

        await expect(page).toHaveTitle(/João Grilo | Senior Full-Stack Developer/);
    });
});