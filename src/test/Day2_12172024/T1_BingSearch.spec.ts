import {test, expect, Page} from '@playwright/test';

let page: Page
test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
}) // end of before all

test('Search for soccer on Bing @smoke', async () => {
    await page.goto("https://bing.com")
    await page.waitForTimeout(2000)
    await page.locator("xpath=//*[@name='q']").fill("soccer")
    //we need to use keyboard command to press enter on a search field
    await page.keyboard.press("Enter")
    await page.waitForTimeout(2000)

})

test('Capture search number for soccer', async () => {
    let result = await page.locator("xpath=//*[@class='sb_count']").textContent()
    let arrayResult = result.toString().split(" ")
    console.log("Search number for soccer: " + arrayResult[1])
})