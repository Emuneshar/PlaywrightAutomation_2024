import { test, expect, Page } from '@playwright/test';

//declare global page variable
let page: Page
test.beforeAll(async ({ browser }) => {
   page = await browser.newPage()
})//end of beforeAll

//store the car arrays
let cars = Array<string>()
cars.push("bmw")
cars.push("audi")
cars.push("toyota")
test('Search for cars on google', async () => {
    for(let i =0; i<cars.length; i++){
        await page.goto("https://www.google.com")
        await page.locator("xpath=//*[@name='q']").fill(cars[i])
        await page.locator("xpath=//*[@name='btnK']").nth(0).click()
        //click on tools menu
        await page.locator("xpath=//*[@id='hdtb-tls']").click()
        let result = await page.locator("xpath=//*[@id='result-stats']").textContent()
        let arrayResult = result.toString().split(" ")
        console.log("Search number for " + cars[i] + " is " + arrayResult[1])
    }//end of loop
})