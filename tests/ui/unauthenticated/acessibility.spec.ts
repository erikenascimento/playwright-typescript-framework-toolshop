import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';


test('Homepage should not have any new detectable accessibility issues', async ({ page }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toHaveLength(5)
});