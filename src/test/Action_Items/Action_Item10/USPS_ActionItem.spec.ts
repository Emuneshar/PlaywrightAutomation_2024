import {test, expect, Page} from "@playwright/test"
import { captureText, click, clickByIndex, mouseHover, mouseHoverNth, scrollByPixel, sendKeys } from "../../../main/Reusable_Methods"

let page: Page

// Before all is where we create the browser instance
test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
}) // End of before all

// Storage of all the xpaths, url's and variables/constants needed for this test 
const url = "https://www.usps.com/"
const xpathShop = "//*[@class = 'menuitem']"
const xpathStamps = "//*[@class = 'tool-stamps']"
const xpathStampButton = "//*[@class = 'checkbox-label']"
const xpathFirstStamp = "//*[@class = 'col-6 col-md-4 results-per-page ']"
const xpathAddToCart = "//*[@id = 'addToCartVisBtn122104']"
const xpathViewCart = "//*[@class= 'button--primary button--white']"
const xpathQuantity = "//*[@class = 'col-8 form-control']"
const xpathUpdate = "//*[@id = 'atg_store_update']"
const xpathInfo = "//*[@class = 'prod-info-detail']"

// Start of test
test("Capture Stamp information under the item section @ai", async () =>{
    await page.goto(url) // Navigates to the USPS Site
    await mouseHoverNth(page, xpathShop, 2, "Shop") // Hover over the shop menu item
    await clickByIndex(page, xpathStamps, 1,  "Stamps") // Click on the Stamps item 
    await clickByIndex(page, xpathStampButton, 0,"Stamp Button") // Click on the stamp button
    await clickByIndex(page, xpathStampButton, 4, "Additional Postage") // Clicks on additional postage
    await scrollByPixel(page, 0, 400, "Scrolling") // Scrolling by pixels down to the first stamp result
    await clickByIndex(page, xpathFirstStamp, 0, "First Stamp") // Clicks on the first stamp
    await click(page, xpathAddToCart, "Add to Cart") // Click on add to cart
    await click(page, xpathViewCart, "View Cart") // Click on view cart
    await sendKeys(page, xpathQuantity, "2", "Quantity") // Sends 2 to the quantity area
    await click(page, xpathUpdate, "Update") // clicks on the update button to calculate the new total
    let text = await captureText(page,xpathInfo, "Info") // Gets the info about the selected stamp
    let trimmedText = text.trim() // Attempted to clean up the result from the stamp info due to excessive blank space. Works only for the first line. I suspect its due to each info line being in their own p tag
    console.log(trimmedText) // Prints out the semi-cleaned up text
}) // End of test