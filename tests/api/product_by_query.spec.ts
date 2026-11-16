import { test, expect } from '@playwright/test';

test.use({ storageState: { cookies: [], origins: [] } });

test('Get product matching the search query', async ({ request }) => {
    const productName = 'Thor Hammer';
    const response = await request.get('https://api.practicesoftwaretesting.com/products/search', {
        params: {
            q: productName,
        },
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.data[0].name).toBe(productName);
});