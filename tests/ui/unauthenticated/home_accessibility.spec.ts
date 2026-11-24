import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';


test('Homepage should not have any new detectable accessibility issues', async ({ page }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .disableRules(['label-content-name-mismatch'])
        .analyze();

    expect(accessibilityScanResults.violations).toEqual([])
});