import {test, expect, Page} from '@playwright/test';

// declaring global variables
let page: Page

// Before all 
test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
}) // end of before all

let url = "https://www.weightwatchers.com/us/find-a-workshop"
let xpathInPerson = "xpath=//*[text() = 'In-Person']"
let xpathLocationSearch = "xpath=//*[@id = 'location-search']"
let xpathRightArrow = "xpath=//*[@class = 'rightArrow-C_sUu']"
let zipCodes = Array<string>() // Create an array list of mock data

// Added zipcodes to the list 
zipCodes.push("90001")
zipCodes.push("11001")
zipCodes.push("77010")


test('Go to weight watchers site', async() => {
    await page.setViewportSize({width:1920, height:1032}) // attempted to mximize the screen
    await page.waitForTimeout(6000) // Added time to allow for the screen to maximize window
    
    
    await page.goto(url) // Navigate to the weight watchers site
    await page.waitForTimeout(2000) // slowed the automation to see the script run
    await page.locator(xpathInPerson).nth(0).click() // click on in person
    await page.locator(xpathLocationSearch).click() // click on location search
    await page.locator(xpathLocationSearch).clear() // clear zip code field
    await page.locator(xpathLocationSearch).fill("11001") // sent in zipcode mock data
    await page.locator(xpathRightArrow).click()
    await page.waitForTimeout(2000)

    
    
    //await page.waitForTimeout(6000) // slowed the script to see the results
})