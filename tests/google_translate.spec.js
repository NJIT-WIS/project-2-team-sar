const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');
const config = require(path.join(process.cwd(), 'playwright.config.js'));

test('Google Translator Test with Spanish and French', async ({ page }) => {
  const pageUrl = `${config.use.baseURL}`;
  await page.goto(pageUrl);
  await page.waitForLoadState();

  const isButtonVisible = await page.isVisible('[aria-label="Toggle navigation"]');
  if (isButtonVisible) {
    await page.click('[aria-label="Toggle navigation"]');
    console.log('        Clicked on toggle navigation button on Iphone');
  } else {
    console.log('        Toggle navigation button not visible since testing Desktop');
  }

  //Google Translate French
  await page.getByRole('combobox', { name: 'Language Translate Widget' }).selectOption('fr');
  await page.waitForTimeout(2000); // Wait for 2 seconds
  const resourcesHeaderText1 = await page.$eval('h3', el => el.textContent)
  expect(resourcesHeaderText1).toContain('Intelligence artificielle')

  //Google Translate Spanish
  await page.getByRole('combobox', { name: 'Language Translate Widget' }).selectOption('es');
  await page.waitForTimeout(2000); // Wait for 2 seconds
  const resourcesHeaderText2 = await page.$eval('h3', el => el.textContent)
  expect(resourcesHeaderText2).toContain('Inteligencia artificial')
});