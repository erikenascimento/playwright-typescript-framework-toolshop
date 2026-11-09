import { test, expect } from '@playwright/test';

test.describe('Browse between products categories', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Navigate to the "Hand Tools" category', async ({ page }) => {
        await page.getByRole('button', { name: 'Categories' }).click();
        await page.getByRole('link', { name: 'Hand Tools' }).click();

        //Validate the title of the page is correct
        await expect(page.getByRole('heading', { name: 'Category: Hand Tools' })).toBeVisible();

        //Validate the first product in the list is "Combination Pliers"
        await expect(page.getByRole('heading', { name: 'Combination Pliers' })).toBeVisible()
    });

    test('Navigate to the "Power Tools" category', async ({ page }) => {
        await page.getByRole('button', { name: 'Categories' }).click();
        await page.getByRole('link', { name: 'Power Tools' }).click();

        //Validate the title of the page is correct
        await expect(page.getByRole('heading', { name: 'Category: Power Tools' })).toBeVisible();

        //Validate the first product in the list is "Sheet Sander"
        await expect(page.getByRole('heading', { name: 'Sheet Sander' })).toBeVisible()
    });

    test('Navigate to the "Other" category', async ({ page }) => {
        await page.getByRole('button', { name: 'Categories' }).click();
        await page.getByRole('link', { name: 'Other' }).click();

        //Validate the title of the page is correct
        await expect(page.getByRole('heading', { name: 'Category: Other' })).toBeVisible();

        //Validate the first product in the list is "Safety Googles"
        await expect(page.getByRole('heading', { name: 'Safety Goggles' })).toBeVisible()
    });

    test('Navigate to the "Special Tools" category', async ({ page }) => {
        await page.getByRole('button', { name: 'Categories' }).click();
        await page.getByRole('link', { name: 'Special Tools' }).click();

        //Validate the page does not display any products
        await expect(page.getByText('There are no products found')).toBeVisible();
    });

    test('Navigate to the "Rentals" category', async ({ page }) => {
        await page.getByRole('button', { name: 'Categories' }).click();
        await page.getByRole('link', { name: 'Rentals' }).click();

        //Validate the title of the page is correct
        await expect(page.getByRole('heading', { name: 'Rentals' })).toBeVisible();

        //Validate the first Rental in the list is "Excavator"
        await expect(page.getByRole('heading', { name: 'Excavator' })).toBeVisible()
    });
});