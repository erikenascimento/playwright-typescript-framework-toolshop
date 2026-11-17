import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../../../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
    await page.goto('/auth/login');

    await page.getByLabel('Email address *').fill(process.env.USER_CUSTOMER2_EMAIL!);
    await page.getByLabel('Password *').fill(process.env.USER_CUSTOMER2_PASSWORD!);
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible()

    await page.context().storageState({ path: authFile });
});