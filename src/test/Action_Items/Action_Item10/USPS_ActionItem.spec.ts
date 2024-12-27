import {test, expect, Page} from "@playwright/test"
import { mouseHover } from "../../../main/Reusable_Methods"

let page: Page
test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
}) // End of before all

const url = "https://www.usps.com/"
const xpath = "//*[@class = 'menuitem']"
test("Capture Stamp information under the item section", async () =>{
    await page.goto(url)
    await mouseHover(page, )
})