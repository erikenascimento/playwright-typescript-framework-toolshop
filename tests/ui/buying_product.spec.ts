import { test, expect } from '@playwright/test';

test('A logged user can purchase a product', async ({ page }) => {
    await page.goto('/');

    const productName = 'Thor Hammer';

    await test.step('Search for the product name in the Search input', async () => {
        await page.getByPlaceholder('Search').fill(productName);
        await page.keyboard.press('Enter');

        await expect(page.getByText(`Searched for: ${productName}`)).toBeVisible();
    });

    await test.step('Go to the product page', async () => {
        await page.locator(`h5:has-text("${productName}")`).click();

        //make the match be exact to differentiate from the heading on the previous page
        await expect(page.getByRole('heading', { name: productName, exact: true })).toBeVisible();
    });

    await test.step('Navigate to the cart after adding the product to it', async () => {
        await page.getByRole('button', { name: 'Add to cart' }).click();

        await page.locator('a[data-test="nav-cart"]').click();
    });

    //store the value of the locator to the checkout button
    const checkoutButton = page.getByRole('button', { name: 'Proceed to checkout' });

    await test.step('Proceed from the price review page', async () => {
        await expect(checkoutButton).toBeVisible();

        await checkoutButton.click();
    });

    await test.step('Confirm the user is already logged in an can proceed to checkout', async () => {
        await expect(page.getByText('You can proceed to checkout')).toBeVisible();

        await checkoutButton.click();
    });

    await test.step('Fill in the Billing details and proceed with the checkout', async () => {
        await expect(page.getByRole('heading', { name: 'Billing Address' })).toBeVisible();

        await page.getByLabel('Postal Code').fill('5050');
        await page.getByLabel('House Number').fill('123');

        await expect(checkoutButton).toBeEnabled();
        await checkoutButton.click();
    });

    await test.step('Fill in the Payment details and finish the checkout', async () => {
        await expect(page.getByRole('heading', { name: 'Payment' })).toBeVisible();

        await page.getByLabel('Payment Method').selectOption('Buy Now Pay Later');
        await page.getByLabel('Monthly Installments').selectOption('3 Monthly Installments');

        const checkPaymentButton = page.getByRole('button', { name: 'Check payment' });
        await expect(checkPaymentButton).toBeEnabled();
        await checkPaymentButton.click();
    });

    await test.step('The purchase has been completed successfully', async () => {
        await expect(page.getByText('Payment was successful')).toBeVisible();
        await page.locator('[data-test="finish"]').click();

        await expect(page.getByText('Thanks for your order!')).toBeVisible();
    });
})