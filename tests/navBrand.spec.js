const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');
const config = require(path.join(process.cwd(), 'playwright.config.js'));

test('Nav Brand should be MyWebClass', async ({ page }) => {

  const pageUrl = `${config.use.baseURL}`;

  // Go to the URL
  await page.goto(pageUrl);

  // Wait for the page to load
  await page.waitForLoadState();

  await page.waitForSelector('.navbar-brand');
  // Get the text of the navbrand element
  const navbrandText = await page.$eval('.navbar-brand', element => element.textContent);

  // Verify that the navbrand text is correct
  expect(navbrandText).toBe('MyWebClass');
});