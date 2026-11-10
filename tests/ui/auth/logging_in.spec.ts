import { expect, test } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../..', '.env') });

test.describe('Logging in', () => {
    const email = process.env.USER_CUSTOMER2_EMAIL;
    const password = process.env.USER_CUSTOMER2_PASSWORD;

    test('Logs in with valid credentials', async ({ page }) => {
        await page.goto('/');

        await page.getByRole('link', { name: 'Sign in' }).click();


        await page.getByLabel('Email address *').fill(email!);
        await page.getByLabel('Password *').fill(password!);
        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible()
    });
});