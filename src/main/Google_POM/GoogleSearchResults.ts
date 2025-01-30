import {test, Page, Locator} from '@playwright/test'

export class GoogleSearchResults {
    // Initialize/declare the global variables for this page
    readonly page: Page;
    readonly SEARCH_RESULT_TEXT : Locator
    

    constructor(page: Page){
        this.page = page
        this.SEARCH_RESULT_TEXT = page.locator("xpath=//*[@id = 'result-stats']") ;
        
    }

    async getSearchResult (){
        const searchresult = await this.SEARCH_RESULT_TEXT.textContent()
        const searchresultArray = searchresult.split(" ")
        console.log("The search number is : " + searchresultArray[1])
    }


}