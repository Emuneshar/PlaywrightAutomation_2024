import {test, expect, Page} from "@playwright/test"
import { captureText, click, clickByIndex, mouseHover, mouseHoverNth, scrollByPixel, sendKeys } from "../../../main/Reusable_Methods"

let page: Page
test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
}) // End of before all

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


test("Capture Stamp information under the item section @ai", async () =>{
    await page.goto(url)
    let result = await page.locator(xpathShop).all()
    await mouseHoverNth(page, xpathShop, 2, "Shop")
    await clickByIndex(page, xpathStamps, 1,  "Stamps")
    await clickByIndex(page, xpathStampButton, 0,"Stamp Button")
    await clickByIndex(page, xpathStampButton, 4, "Additional Postage")
    await scrollByPixel(page, 0, 400, "Scrolling")
    await clickByIndex(page, xpathFirstStamp, 0, "First Stamp")
    await click(page, xpathAddToCart, "Add to Cart")
    await click(page, xpathViewCart, "View Cart")
    await sendKeys(page, xpathQuantity, "2", "Quantity")
    await click(page, xpathUpdate, "Update")
    let text = await captureText(page,xpathInfo, "Info")
    let trimmedText = text.trim()
    console.log(trimmedText)
})