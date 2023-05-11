const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');
const config = require(path.join(process.cwd(), 'playwright.config.js'));

test('Mailchimp embedded HTML form should exist on the subscribe page', async ({ page }) => {

  const pageUrl = `${config.use.baseURL}/subscribe`;

  // Go to the URL
  await page.goto(pageUrl);

  // Wait for the page to load
  await page.waitForLoadState();
  const mailchimpForm = await page.$('#mc_embed_signup');

  expect(mailchimpForm).toBeTruthy();
});