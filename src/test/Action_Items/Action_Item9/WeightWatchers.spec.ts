import {test, expect, Page} from '@playwright/test';

// declaring global variables
let page: Page

// Before all 
test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
}) // end of before all

let zipCodes = Array<string>() // Create an array list of mock data

// Added zipcodes to the list 
zipCodes.push("90001")
zipCodes.push("11001")
zipCodes.push("77010")


test('Go to weight watchers site', async() => {
    await page.setViewportSize({width:1920, height:1032}) // attempted to mximize the screen
    await page.waitForTimeout(6000) // Added time to allow for the screen to maximize window
    await page.goto("https://www.weightwatchers.com/us/find-a-workshop") // Navigate to the weight watchers site
    
    
    await page.waitForTimeout(6000) // slowed the script to see the results
})