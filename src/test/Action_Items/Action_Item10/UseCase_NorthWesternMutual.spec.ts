import {test, expect, Page} from "@playwright/test"
import { mouseHover } from "../../../main/Reusable_Methods"

let page: Page
test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
})

let xpathFinancialPlanning = "//*[@id = 'nmx-nav-link-primary-financial-planning']"
const url = "https://northwesternmutual.com"
test("verify text on site", async() => {
    await page.goto(url)
    await mouseHover(page, xpathFinancialPlanning, "Financial Planning")

})