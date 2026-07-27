// @ts-check
import { test, expect } from '@playwright/test';

test('has title "Selenium Online Trainings"', async ({ page }) => {
  await page.goto('https://www.toolsqa.com/');

  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/Playwright/);
});

