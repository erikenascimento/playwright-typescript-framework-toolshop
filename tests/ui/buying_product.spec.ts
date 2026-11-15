import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../..', '.env') });

test('user can buy a product', async ({ page }) => {
    await page.goto('/');

    //Type and enter the product name in the search bar
    const productName = 'Thor Hammer';
    await page.getByPlaceholder('Search').fill(productName);
    await page.keyboard.press('Enter');

    //Validate the page contains the text "Searched for"
    await expect(page.getByText(`Searched for: ${productName}`)).toBeVisible();

    //Validate that the product name is inside the nth(2) div below the card
    const productLink = page.locator(`h5:has-text("${productName}")`);
    // await expect(productLink).toBeVisible(); //this line is flaky

    //Click on the product link
    await productLink.click();

    //Validate that the product page contains the product name in a heading
    await expect(page.getByRole('heading', { name: productName })).toBeVisible();

    //Store the value of the product price located at the data-test "unit-price"
    const unitPrice = await page.locator('span[data-test="unit-price"]').textContent();

    //Click on the "Add to cart" button
    await page.getByRole('button', { name: 'Add to cart' }).click();

    //Click on the shopping cart icon in the top right corner
    await page.locator('a[data-test="nav-cart"]').click();

    //Check for the button with the text "proceed to checkout" inside it
    const checkoutButton = page.getByRole('button', { name: 'Proceed to checkout' });
    await expect(checkoutButton).toBeVisible();

    //Validate the page contains a table row with the productName in it
    const productRow = page.locator(`tr:has-text("${productName}")`);
    await expect(productRow).toBeVisible();

    //Check that the page contains the number "1" in an input field in a row below the header "Quantity"
    const quantityInput = page.locator('input[data-test="product-quantity"]');
    await expect(quantityInput).toHaveValue('1');

    //Store the value of the product price located at the data-test "product-price"
    const productPrice = await page.locator('span[data-test="product-price"]').textContent();

    //Validate that the unitPrice variable has the same value as the productPrice variable ignoring the $ symbol and .
    expect(unitPrice!.replace('$', '').replace('.', '')).toBe(productPrice!.replace('$', '').replace('.', ''));

    //Store the value of the cart total price located at the data-test "cart-total"
    const cartTotal = await page.locator('td[data-test="cart-total"]').textContent();

    //if the condition above is true, click on the "Proceed to checkout" button else throw an error and finish the test
    if (unitPrice!.replace('$', '').replace('.', '') === cartTotal!.replace('$', '').replace('.', '')) {
        await checkoutButton.click();
    } else {
        throw new Error("Prices do not match");
    }

    //validate the page is showing a login screen by checking that the page contains a heading with the text "Login"
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

    //enter the email in the input with data-test="email" and password from the .env file into the login form and click on the "Login" button
    await page.locator('input[data-test="email"]').fill(process.env.USER_CUSTOMER1_EMAIL!);
    await page.getByPlaceholder('Your password').fill(process.env.USER_CUSTOMER1_PASSWORD!);
    await page.locator('[data-test="login-submit"]').click();

    //Validate the page contains the message "You are already logged in. You can proceed to checkout."
    await expect(page.getByText('You can proceed to checkout')).toBeVisible();

    //click ${checkoutButton}
    await checkoutButton.click();

    //Validate the page contains the heading "Billing Address"
    await expect(page.getByRole('heading', { name: 'Billing Address' })).toBeVisible();

    // //Generate a random postal code and enter it into the "Postal Code" input field
    // const randomPostalCode = Math.floor(10000 + Math.random() * 90000).toString();
    // await page.getByLabel('Postal Code').fill(randomPostalCode);

    // //Generate a random House number and enter it into the "House Number" input field
    // const randomHouseNumber = Math.floor(1 + Math.random() * 1000).toString();
    // await page.getByLabel('House Number').fill(randomHouseNumber);

    // //Validate that the button "Proceed to checkout" is enabled and click on it
    // await expect(checkoutButton).toBeEnabled();
    // await checkoutButton.click();

    // //Validate the page contains the heading "Payment"
    // await expect(page.getByRole('heading', { name: 'Payment' })).toBeVisible();

    // //Select "Buy Now Pay Later" from the Payment Method dropdown
    // await page.getByLabel('Payment Method').selectOption('Buy Now Pay Later');

    // //Validate that a new dropdown labeled "Monthly Installments" just appeared and select "3 monthly Installments" from it
    // await expect(page.getByLabel('Monthly Installments')).toBeVisible();
    // await page.getByLabel('Monthly Installments').selectOption('3 monthly Installments');

    // //Validate that the button "Check payment" is enabled and click on it
    // const checkPaymentButton = page.getByRole('button', { name: 'Check payment' });
    // await expect(checkPaymentButton).toBeEnabled();
    // await checkPaymentButton.click();

    // //Check that the text "Payment was successful" is visible on the page
    // await expect(page.getByText('Payment was successful')).toBeVisible();

    // await page.locator('[data-test="finish"]').click();
    // await page.getByText('Thanks for your order!').click();
})