import { test, expect, Page } from '@playwright/test';

//declare global page variable
let page: Page
test.beforeAll(async ({ browser }) => {
   page = await browser.newPage()
})//end of beforeAll

test('Search for bmw on google @smoke', async () => {
    await page.goto("https://www.google.com")
    await page.locator("xpath=//*[@name='q']").fill("bmw")
    await page.locator("xpath=//*[@name='btnK']").nth(0).click()
    await page.waitForTimeout(5000)
}) // end of test 1 


test('Capture search number for BMW', async () => {
    let result = page.locator("xpath=//*[@id='result-stats']")
    let arrayResult = result.toString().split(" ")
    console.log("Search number for BMW: " + arrayResult[1])
}) // end of test 2


