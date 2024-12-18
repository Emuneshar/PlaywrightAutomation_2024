import { test, expect, Page } from '@playwright/test';

//declare global page variable
let page: Page
test.beforeAll(async ({ browser }) => {
   page = await browser.newPage()
})//end of beforeAll

let cars = Array<string>()
cars.push("BMW")
cars.push("Audi")
cars.push("Chevy")




test('Search for cars on google', async () => {
    for(let i = 0; i < cars.length; i++){
        await page.goto("https://www.google.com")
        await page.locator("xpath=//*[@name='q']").fill(cars[i])
        await page.locator("xpath=//*[@name='btnK']").nth(0).click()   
        let result = await page.locator("xpath=//*[@id='result-stats']").textContent()
        // This is not an error below
        let arrayResult = result.toString().split(" ")
        console.log("Search number for " + cars[i] + ": " + arrayResult[1])
    }
}) 

