import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly categoriesButton: Locator;
    readonly categoriesDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.categoriesButton = page.getByRole('button', { name: 'Categories' })
        this.categoriesDropdown = page.getByLabel('nav-categories')
    }

    //Actions
    async openCategories() {
        await this.categoriesButton.click();
        await expect(this.categoriesDropdown).toBeVisible();
    }
}