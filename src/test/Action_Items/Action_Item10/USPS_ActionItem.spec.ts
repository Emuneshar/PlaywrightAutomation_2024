import {test, expect, Page} from "@playwright/test"
import { click, clickByIndex, mouseHover, mouseHoverNth } from "../../../main/Reusable_Methods"

let page: Page
test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
}) // End of before all

const url = "https://www.usps.com/"
const xpathShop = "//*[@class = 'menuitem']"
const xpathStamps = "//*[@class = 'tool-stamps']"
const xpathStampButton = "//*[@class = 'checkbox-label']"

test("Capture Stamp information under the item section", async () =>{
    await page.goto(url)
    await page.waitForTimeout(2000)
    let result = await page.locator(xpathShop).all()
    await mouseHoverNth(page, xpathShop, 2, "Shop")
    await clickByIndex(page, xpathStamps, 1,  "Stamps")
    await clickByIndex(page, xpathStampButton, 0,"Stamp Button")
    await clickByIndex(page, xpathStampButton, 4, "Additional Postage")
    await page.waitForTimeout(2000)
})