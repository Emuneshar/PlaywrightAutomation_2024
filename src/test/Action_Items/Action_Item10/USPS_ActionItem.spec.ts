import {test, expect, Page} from "@playwright/test"
import { captureText, sendKeys } from "../../../main/Reusable_Methods"

let page: Page
test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
}) // End of before all

