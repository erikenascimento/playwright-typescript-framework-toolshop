import { test, expect } from '@playwright/test';
import { HomePage } from '../../../src/pages/home.page';

test('While in the homepage the user can perform basic navigation via the keyboard', async ({ page }) => {
    await page.goto('/');

    const homePage = new HomePage(page);
    const homeItemNavbar = homePage.homeItemNavbar;
    let reachedHome = false;

    for (let i = 0; i < 20; i++) {
        await page.keyboard.press('Tab');

        if (await homeItemNavbar.evaluate(element => element === document.activeElement)) {
            reachedHome = true;
            break;
        }
    }

    expect(reachedHome).toBe(true);
})