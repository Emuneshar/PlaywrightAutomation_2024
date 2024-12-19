import {test, expect, Page} from '@playwright/test';

// declaring global variables
let page: Page

// Before all 
test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
}) // end of before all

test('Go to weight watchers site', async() => {
    await page.waitForTimeout(6000) // Added time to allow for the screen to maximize window
    await page.goto("https://www.weightwatchers.com")
    await page.waitForTimeout(6000)
})