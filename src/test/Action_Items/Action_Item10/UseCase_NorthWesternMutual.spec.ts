import {test, expect, Page} from "@playwright/test"
import { captureText, click, mouseHover } from "../../../main/Reusable_Methods"

let page: Page
test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
})

let xpathFinancialPlanning = "//*[@id = 'nmx-nav-link-primary-financial-planning']"
let xpathEstatePlanning = "//*[@id = 'nmx-nav-link-primary-sub-estate-planning']"
let xpathAboutPlanning = "//*[@id = 'hero-description-text-estate-planning-hero']"
const expectedText = "Having a plan for your estate—your home, your  wealth, your possessions-means you can leave the legacy you want, whether that's to help your family, a charity, or an institution."

const url = "https://northwesternmutual.com"
test("verify text on site @ai", async() => {
    await page.goto(url)
    await mouseHover(page, xpathFinancialPlanning, "Financial Planning")
    await click(page, xpathEstatePlanning, "Estate Planning")
    let text = await captureText(page, xpathAboutPlanning, "About planning")
    console.log(text)
    if(expectedText === text){
        console.log("Text was a match")
    }
    else{
        console.log("Text was not a match")
    }
})