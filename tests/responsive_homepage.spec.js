const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');
const config = require(path.join(process.cwd(), 'playwright.config.js'));

test('Responsive HomePage Test on Small-Medium-Large Screen', async ({ page }) => {

  const pageUrl = `${config.use.baseURL}`;

  // Go to the URL
  await page.goto(pageUrl);

  // Wait for the page to load
  await page.waitForLoadState();

  // Check that the page is responsive to small screen size
  await page.setViewportSize({ width: 375, height: 667 });
  expect(await page.$eval('nav', el => el.offsetHeight)).toBeGreaterThan(0);

  // Check that the page is responsive to medium screen size
  await page.setViewportSize({ width: 768, height: 1024 });
  expect(await page.$eval('nav', el => el.offsetHeight)).toBeGreaterThan(0);

  // Check that the page is responsive to large screen size
  await page.setViewportSize({ width: 1280, height: 800 });
  expect(await page.$eval('nav', el => el.offsetHeight)).toBeGreaterThan(0);
});