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
let xpathStudioLink = "xpath=//*[@class = 'wrapperLink-rmsRn']"
let xpathAddress = "xpath=//*[@class = 'address-FnT8k']"
let zipCodes = Array<string>() // Create an array list of mock data

// Added zipcodes to the list 
zipCodes.push("90001")
zipCodes.push("11001")
zipCodes.push("77010")


test('Go to weight watchers site', async() => {
    await page.setViewportSize({width:1920, height:1032}) // attempted to mximize the screen
    await page.waitForTimeout(6000) // Added time to allow for the screen to maximize window
    
    for(let i = 0; i < zipCodes.length; i++){
        await page.goto(url) // Navigate to the weight watchers site
        await page.waitForTimeout(2000) // slowed the automation to see the script run
        await page.locator(xpathInPerson).nth(0).click() // click on in person
        await page.locator(xpathLocationSearch).click() // click on location search
        await page.locator(xpathLocationSearch).clear() // clear zip code field
        await page.locator(xpathLocationSearch).fill(zipCodes[i]) // sent in zipcode mock data
        await page.locator(xpathRightArrow).click() // click on continue button


        if(i === 0)( // if this is the first iteration, click on the second link
            await page.locator(xpathStudioLink).nth(1).click()
        )
        else if(i ===1){ // if this is the second iteration, click on the third link
            await page.locator(xpathStudioLink).nth(2).click()
        }
        else{ // if this is the third iteration, click on the first link
            await page.locator(xpathStudioLink).nth(0).click()
        }

        console.log("*+*+*+*+*+*+*+*++*+*++*+*+*+*++*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+**+*+*+*+*+")
        let address = await page.locator(xpathAddress).textContent()
        console.log("Address " + (i+1) + " is: " + address)
        
        await page.waitForTimeout(2000)
    }
    

    
    
    //await page.waitForTimeout(6000) // slowed the script to see the results
})