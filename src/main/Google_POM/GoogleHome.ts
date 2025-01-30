import {test, Page, Locator} from '@playwright/test'

export class GoogleHome {
    // Initialize/declare the global variables for this page
    readonly page: Page;
    readonly SEARCH_FIELD : Locator
    readonly SEARCH_BUTTON : Locator

    constructor(page: Page){
        this.page = page
        this.SEARCH_BUTTON = page.locator("xpath=//*[@name = 'btnK']") ;
        this.SEARCH_FIELD = page.locator("xpath=//*[@name = 'q']");
    }

    async search (keyword: string){
        await this.SEARCH_FIELD.fill(keyword)
    }

    async clickOnSearchButton(){
        await this.SEARCH_BUTTON.nth(1).click({force:true})
    }

}