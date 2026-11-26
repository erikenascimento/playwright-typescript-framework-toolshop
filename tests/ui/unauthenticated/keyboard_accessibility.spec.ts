import { test, expect } from '@playwright/test';
import { HomePage } from '../../../src/pages/home.page';

test('While in the homepage the user can perform basic navigation via the keyboard', async ({ page }) => {
    await page.goto('/');

    //homepage POM objects
    const homePage = new HomePage(page);
    const sortSelect = homePage.sortSelect;

    await test.step('Cycle tab until the sorting dropdown is active', async () => {
        for (let i = 0; i < 20; i++) {
            await page.keyboard.press('Tab');

            if (await sortSelect.evaluate(element => element === document.activeElement)) {
                break;
            }
        }
    })

    await test.step('Cycle between the options and select to sort reversed Alphabetically', async () => {
        const reversedOptionText = 'Name (Z - A)'

        await page.keyboard.press('Enter');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');

        await expect(sortSelect.locator('option:checked')).toHaveText(reversedOptionText);
    })

    const firstProduct = 'Wood Saw'
    const secondProduct = 'Wood Carving Chisels'

    await test.step('Evaluate if the first two product are the ones defined above respectively', async () => {
        await expect(page.getByTestId('product-name').nth(0)).toHaveText(firstProduct)
        await expect(page.getByTestId('product-name').nth(1)).toHaveText(secondProduct)
    })
})